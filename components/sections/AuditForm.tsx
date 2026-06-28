"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import { CheckCircle, AlertCircle } from "lucide-react";

const schema = z.object({
  nom: z.string().min(2, "Votre nom est requis"),
  entreprise: z.string().min(1, "Le nom de votre entreprise est requis"),
  telephone: z
    .string()
    .min(10, "Numéro de téléphone invalide")
    .regex(/^[0-9+\s\-().]+$/, "Numéro de téléphone invalide"),
  email: z.string().email("Adresse email invalide"),
  activite: z.string().min(3, "Décrivez brièvement votre activité"),
  salaries: z.string().min(1, "Sélectionnez une option"),
  defi: z.string().min(10, "Décrivez votre principal défi commercial"),
  objectif: z.string().min(10, "Décrivez votre objectif principal"),
  honeypot: z.string().max(0, "Spam détecté"),
});

type FormData = z.infer<typeof schema>;

type SubmitStatus = "idle" | "loading" | "success" | "error";

export function AuditForm() {
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  async function onSubmit(data: FormData) {
    setStatus("loading");
    try {
      const res = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-8 text-center">
        <CheckCircle
          className="mx-auto h-10 w-10 text-emerald-500 mb-4"
          aria-hidden="true"
        />
        <h2 className="text-lg font-semibold text-neutral-900">
          Demande envoyée !
        </h2>
        <p className="mt-2 text-sm text-neutral-600">
          Je vous recontacte sous 24h pour fixer l'horaire de l'audit.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-neutral-200 bg-white p-6 sm:p-8">
      <h2 className="text-lg font-semibold text-neutral-950 mb-1">
        Demander l'audit
      </h2>
      <p className="text-sm text-neutral-500 mb-6">
        Je vous recontacte sous 24h pour fixer l'horaire.
      </p>

      {status === "error" && (
        <div
          role="alert"
          className="mb-6 flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 px-4 py-3"
        >
          <AlertCircle
            className="mt-0.5 h-4 w-4 shrink-0 text-red-500"
            aria-hidden="true"
          />
          <p className="text-sm text-red-700">
            Une erreur est survenue. Réessayez ou contactez-moi directement.
          </p>
        </div>
      )}

      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="space-y-5"
        aria-label="Formulaire de demande d'audit gratuit"
      >
        {/* Honeypot anti-spam */}
        <div className="sr-only" aria-hidden="true">
          <input tabIndex={-1} {...register("honeypot")} autoComplete="off" />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Input
            label="Nom et prénom"
            required
            autoComplete="name"
            error={errors.nom?.message}
            {...register("nom")}
          />
          <Input
            label="Entreprise"
            required
            autoComplete="organization"
            error={errors.entreprise?.message}
            {...register("entreprise")}
          />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Input
            label="Téléphone"
            type="tel"
            required
            autoComplete="tel"
            error={errors.telephone?.message}
            {...register("telephone")}
          />
          <Input
            label="Email"
            type="email"
            required
            autoComplete="email"
            error={errors.email?.message}
            {...register("email")}
          />
        </div>

        <Input
          label="Votre activité"
          required
          placeholder="Ex : consultant RH indépendant, artisan plombier..."
          error={errors.activite?.message}
          {...register("activite")}
        />

        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="salaries"
            className="text-sm font-medium text-neutral-700"
          >
            Nombre de salariés{" "}
            <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <select
            id="salaries"
            className="w-full rounded-lg border border-neutral-300 bg-white px-3.5 py-2.5 text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-400"
            aria-invalid={errors.salaries ? "true" : undefined}
            {...register("salaries")}
          >
            <option value="">Sélectionnez...</option>
            <option value="0">Je suis seul (auto-entrepreneur)</option>
            <option value="1-5">1 à 5 salariés</option>
            <option value="6-20">6 à 20 salariés</option>
            <option value="20+">Plus de 20 salariés</option>
          </select>
          {errors.salaries && (
            <p role="alert" className="text-xs font-medium text-red-600">
              {errors.salaries.message}
            </p>
          )}
        </div>

        <Textarea
          label="Votre principal défi commercial"
          required
          rows={3}
          placeholder="Ex : Je n'arrive pas à générer des rendez-vous qualifiés malgré ma prospection..."
          error={errors.defi?.message}
          {...register("defi")}
        />

        <Textarea
          label="Votre objectif"
          required
          rows={3}
          placeholder="Ex : Obtenir 5 nouveaux clients dans les 3 prochains mois..."
          error={errors.objectif?.message}
          {...register("objectif")}
        />

        <Button
          type="submit"
          loading={status === "loading"}
          fullWidth
          size="lg"
        >
          Demander mon audit gratuit
        </Button>

        <p className="text-xs text-center text-neutral-400">
          En soumettant ce formulaire, vous acceptez d'être recontacté par email
          ou téléphone. Aucune donnée n'est transmise à des tiers.
        </p>
      </form>
    </div>
  );
}
