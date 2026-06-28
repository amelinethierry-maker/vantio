import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

const schema = z.object({
  nom: z.string().min(2).max(100),
  entreprise: z.string().min(1).max(200),
  telephone: z
    .string()
    .min(10)
    .max(20)
    .regex(/^[0-9+\s\-().]+$/),
  email: z.string().email().max(200),
  activite: z.string().min(3).max(500),
  salaries: z.enum(["0", "1-5", "6-20", "20+"]),
  defi: z.string().min(10).max(2000),
  objectif: z.string().min(10).max(2000),
  honeypot: z.string().max(0),
});

const salariesLabel: Record<string, string> = {
  "0": "Seul (auto-entrepreneur)",
  "1-5": "1 à 5 salariés",
  "6-20": "6 à 20 salariés",
  "20+": "Plus de 20 salariés",
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = schema.parse(body);

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: `Vantio <no-reply@vantio.fr>`,
      to: process.env.CONTACT_EMAIL!,
      replyTo: data.email,
      subject: `Nouvelle demande d'audit — ${data.nom} (${data.entreprise})`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #e5e7eb; padding-bottom: 12px;">
            Nouvelle demande d'audit commercial gratuit
          </h2>

          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr style="background: #f9fafb;">
              <td style="padding: 10px 14px; font-weight: bold; width: 40%; color: #374151;">Nom</td>
              <td style="padding: 10px 14px; color: #111827;">${data.nom}</td>
            </tr>
            <tr>
              <td style="padding: 10px 14px; font-weight: bold; color: #374151;">Entreprise</td>
              <td style="padding: 10px 14px; color: #111827;">${data.entreprise}</td>
            </tr>
            <tr style="background: #f9fafb;">
              <td style="padding: 10px 14px; font-weight: bold; color: #374151;">Email</td>
              <td style="padding: 10px 14px; color: #111827;">
                <a href="mailto:${data.email}" style="color: #2563eb;">${data.email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 14px; font-weight: bold; color: #374151;">Téléphone</td>
              <td style="padding: 10px 14px; color: #111827;">
                <a href="tel:${data.telephone}" style="color: #2563eb;">${data.telephone}</a>
              </td>
            </tr>
            <tr style="background: #f9fafb;">
              <td style="padding: 10px 14px; font-weight: bold; color: #374151;">Activité</td>
              <td style="padding: 10px 14px; color: #111827;">${data.activite}</td>
            </tr>
            <tr>
              <td style="padding: 10px 14px; font-weight: bold; color: #374151;">Salariés</td>
              <td style="padding: 10px 14px; color: #111827;">${salariesLabel[data.salaries]}</td>
            </tr>
          </table>

          <div style="margin-top: 20px; padding: 16px; background: #eff6ff; border-left: 4px solid #2563eb; border-radius: 4px;">
            <p style="font-weight: bold; color: #1e40af; margin: 0 0 8px;">Principal défi commercial</p>
            <p style="color: #1e3a8a; margin: 0;">${data.defi}</p>
          </div>

          <div style="margin-top: 12px; padding: 16px; background: #f0fdf4; border-left: 4px solid #16a34a; border-radius: 4px;">
            <p style="font-weight: bold; color: #15803d; margin: 0 0 8px;">Objectif</p>
            <p style="color: #14532d; margin: 0;">${data.objectif}</p>
          </div>

          <div style="margin-top: 24px; text-align: center;">
            <a href="mailto:${data.email}"
               style="display: inline-block; background: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold;">
              Répondre à ${data.nom}
            </a>
          </div>

          <p style="margin-top: 24px; font-size: 12px; color: #9ca3af; text-align: center;">
            Demande reçue via vantio.fr
          </p>
        </div>
      `,
    });

    // Email de confirmation au prospect
    await resend.emails.send({
      from: `Vantio <no-reply@vantio.fr>`,
      to: data.email,
      subject: "Votre demande d'audit commercial a bien été reçue",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #111827;">Bonjour ${data.nom},</h2>

          <p style="color: #374151; line-height: 1.6;">
            Votre demande d'audit commercial gratuit a bien été reçue.
          </p>

          <p style="color: #374151; line-height: 1.6;">
            Je vous recontacte personnellement sous <strong>24h</strong> pour fixer
            l'horaire de notre échange en visioconférence.
          </p>

          <div style="margin: 24px 0; padding: 16px; background: #f9fafb; border-radius: 8px;">
            <p style="font-weight: bold; color: #111827; margin: 0 0 8px;">Ce qui vous attend :</p>
            <ul style="color: #374151; margin: 0; padding-left: 20px; line-height: 1.8;">
              <li>45 minutes d'échange en visioconférence</li>
              <li>Un diagnostic honnête de votre situation commerciale</li>
              <li>Des recommandations concrètes et prioritaires</li>
              <li>Un plan d'action réaliste adapté à votre contexte</li>
            </ul>
          </div>

          <p style="color: #374151; line-height: 1.6;">
            À très bientôt,
          </p>
          <p style="color: #111827; font-weight: bold;">Vantio</p>

          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 24px 0;" />
          <p style="font-size: 12px; color: #9ca3af;">
            vantio.fr — Accompagnement commercial pour TPE et auto-entrepreneurs
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Données invalides", details: error.errors },
        { status: 422 }
      );
    }
    console.error("Erreur envoi email:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
