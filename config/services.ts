export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  hero: string;
  problems: string[];
  benefits: string[];
  process: { step: number; title: string; description: string }[];
  faq: { question: string; answer: string }[];
  keywords: string[];
}

export const services: Service[] = [
  {
    slug: "audit-commercial",
    title: "Audit Commercial",
    shortTitle: "Audit commercial",
    description:
      "Un diagnostic complet de votre situation commerciale actuelle pour identifier les blocages et définir un plan d'action concret.",
    hero: "Comprendre où vous en êtes avant de savoir où aller.",
    problems: [
      "Vous prospectez mais sans résultat mesurable",
      "Vous ne savez pas où se situe le problème dans votre démarche",
      "Vous avez l'impression de travailler beaucoup pour peu de résultats",
      "Vous manquez de visibilité sur votre activité commerciale",
    ],
    benefits: [
      "Une vision claire de vos forces et points de blocage",
      "Un diagnostic précis de votre processus commercial",
      "Des recommandations concrètes et prioritaires",
      "Un plan d'action réaliste adapté à votre situation",
    ],
    process: [
      {
        step: 1,
        title: "Échange initial",
        description: "Un premier appel de 30 minutes pour comprendre votre contexte et vos objectifs.",
      },
      {
        step: 2,
        title: "Analyse",
        description: "Revue de votre processus commercial actuel, vos outils, vos résultats.",
      },
      {
        step: 3,
        title: "Diagnostic",
        description: "Identification des blocages, des opportunités manquées et des priorités.",
      },
      {
        step: 4,
        title: "Restitution",
        description: "Présentation du diagnostic et des recommandations en visioconférence.",
      },
    ],
    faq: [
      {
        question: "Combien de temps dure l'audit ?",
        answer:
          "L'audit complet se déroule sur 2 à 3 échanges d'environ 45 minutes chacun, sur une période d'une semaine.",
      },
      {
        question: "L'audit est-il vraiment gratuit ?",
        answer:
          "Oui. Le premier audit de découverte est entièrement gratuit et sans engagement. Il me permet de comprendre votre situation et de vous apporter une première valeur concrète.",
      },
    ],
    keywords: [
      "audit commercial gratuit",
      "diagnostic commercial",
      "bilan commercial TPE",
    ],
  },
  {
    slug: "prospection-commerciale",
    title: "Prospection Commerciale",
    shortTitle: "Prospection",
    description:
      "Construire une démarche de prospection structurée, régulière et efficace pour trouver de nouveaux clients sans y passer tout votre temps.",
    hero: "Trouver de nouveaux clients sans prospecter dans le vide.",
    problems: [
      "Vous ne savez pas comment identifier vos prospects",
      "Vous prospectez de façon irrégulière, quand vous avez le temps",
      "Vous n'avez pas de méthode structurée",
      "Vous avez essayé plusieurs approches sans résultat durable",
    ],
    benefits: [
      "Une méthode de prospection adaptée à votre activité",
      "Des outils concrets pour organiser votre prospection",
      "Des scripts et templates prêts à l'emploi",
      "Un rythme de prospection réaliste et maintenable",
    ],
    process: [
      {
        step: 1,
        title: "Définition de la cible",
        description: "Identifier précisément votre client idéal et où le trouver.",
      },
      {
        step: 2,
        title: "Construction du processus",
        description: "Mettre en place un processus de prospection reproductible.",
      },
      {
        step: 3,
        title: "Outils et scripts",
        description: "Créer les supports nécessaires : messages, scripts, séquences.",
      },
      {
        step: 4,
        title: "Mise en route et suivi",
        description: "Accompagnement au démarrage et ajustements selon les résultats.",
      },
    ],
    faq: [
      {
        question: "Faut-il un budget publicité pour prospecter ?",
        answer:
          "Non. Les méthodes proposées sont basées sur la prospection directe et le contenu, sans nécessiter de budget publicitaire.",
      },
    ],
    keywords: [
      "prospection commerciale TPE",
      "comment prospecter",
      "méthode prospection B2B",
    ],
  },
  {
    slug: "organisation-commerciale",
    title: "Organisation Commerciale",
    shortTitle: "Organisation",
    description:
      "Structurer votre activité commerciale pour ne plus travailler au feeling et retrouver du temps pour vendre.",
    hero: "Arrêtez de travailler dans l'urgence. Organisez votre commercial.",
    problems: [
      "Vous oubliez de relancer des prospects",
      "Vous n'avez pas de visibilité sur votre pipeline",
      "Vous travaillez au feeling sans process défini",
      "Vous manquez d'organisation et perdez des opportunités",
    ],
    benefits: [
      "Un processus commercial clair et documenté",
      "Un système de suivi de vos prospects",
      "Des routines commerciales efficaces",
      "Une meilleure visibilité sur vos opportunités",
    ],
    process: [
      {
        step: 1,
        title: "État des lieux",
        description: "Analyser votre organisation actuelle et identifier les points de friction.",
      },
      {
        step: 2,
        title: "Structuration",
        description: "Définir les étapes de votre processus commercial de A à Z.",
      },
      {
        step: 3,
        title: "Outils",
        description: "Mettre en place les outils adaptés à votre taille et vos besoins.",
      },
      {
        step: 4,
        title: "Habitudes",
        description: "Installer des routines commerciales hebdomadaires et mensuelles.",
      },
    ],
    faq: [],
    keywords: [
      "organisation commerciale",
      "process commercial TPE",
      "organisation prospection",
    ],
  },
  {
    slug: "processus-commerciaux",
    title: "Création de Processus Commerciaux",
    shortTitle: "Processus",
    description:
      "Documenter et formaliser votre processus de vente pour le rendre reproductible, scalable et transmissible.",
    hero: "Transformez votre intuition commerciale en processus.",
    problems: [
      "Tout repose sur vous et votre mémoire",
      "Vous ne pouvez pas déléguer car rien n'est documenté",
      "Chaque client est abordé différemment sans cohérence",
      "Vous n'avez pas de processus de vente formalisé",
    ],
    benefits: [
      "Un processus de vente documenté et reproductible",
      "Des supports clés en main pour chaque étape",
      "La capacité de déléguer ou de former",
      "Une cohérence dans l'expérience client",
    ],
    process: [
      {
        step: 1,
        title: "Cartographie",
        description: "Identifier toutes les étapes de votre cycle de vente actuel.",
      },
      {
        step: 2,
        title: "Formalisation",
        description: "Documenter chaque étape avec les actions, outils et critères de passage.",
      },
      {
        step: 3,
        title: "Supports",
        description: "Créer les templates, scripts et documents pour chaque étape.",
      },
      {
        step: 4,
        title: "Test et validation",
        description: "Tester le processus et l'ajuster selon les retours terrain.",
      },
    ],
    faq: [],
    keywords: [
      "processus commercial",
      "process de vente",
      "tunnel de vente TPE",
    ],
  },
  {
    slug: "scripts-commerciaux",
    title: "Scripts Commerciaux",
    shortTitle: "Scripts",
    description:
      "Créer les scripts et guides de conversation pour vos appels, emails et messages LinkedIn — adaptés à votre ton et votre clientèle.",
    hero: "Ne plus chercher quoi dire. Avoir les bons mots, au bon moment.",
    problems: [
      "Vous ne savez jamais quoi dire lors d'un premier appel",
      "Vous improvvisez et perdez le fil de la conversation",
      "Vous avez du mal à répondre aux objections",
      "Vos emails de prospection n'obtiennent pas de réponse",
    ],
    benefits: [
      "Des scripts adaptés à votre activité et votre ton",
      "Des réponses aux objections les plus fréquentes",
      "Une structure claire pour chaque type d'échange",
      "Plus de confiance dans vos échanges commerciaux",
    ],
    process: [
      {
        step: 1,
        title: "Analyse",
        description: "Comprendre votre cible, vos offres et les objections fréquentes.",
      },
      {
        step: 2,
        title: "Rédaction",
        description: "Créer les scripts d'appels, emails et messages LinkedIn.",
      },
      {
        step: 3,
        title: "Jeux de rôle",
        description: "Tester et améliorer les scripts en situation réelle.",
      },
      {
        step: 4,
        title: "Bibliothèque",
        description: "Constituer une bibliothèque de réponses aux objections.",
      },
    ],
    faq: [],
    keywords: [
      "scripts commerciaux",
      "script d'appel téléphonique",
      "script prospection",
    ],
  },
  {
    slug: "prospection-linkedin",
    title: "Prospection LinkedIn",
    shortTitle: "LinkedIn",
    description:
      "Utiliser LinkedIn de façon efficace et humaine pour générer des contacts qualifiés sans spammer.",
    hero: "LinkedIn peut être votre meilleur outil de prospection. À condition de bien s'en servir.",
    problems: [
      "Vous êtes sur LinkedIn mais n'en tirez aucun résultat",
      "Vous ne savez pas quoi publier ou comment aborder les prospects",
      "Vous avez essayé d'envoyer des messages mais sans réponse",
      "Vous avez peur de paraître intrusif ou vendeur",
    ],
    benefits: [
      "Une stratégie LinkedIn adaptée à votre activité",
      "Des messages de prospection qui obtiennent des réponses",
      "Un profil optimisé pour attirer vos prospects",
      "Un calendrier de contenu réaliste",
    ],
    process: [
      {
        step: 1,
        title: "Profil",
        description: "Optimiser votre profil pour qu'il parle à vos prospects.",
      },
      {
        step: 2,
        title: "Stratégie",
        description: "Définir votre approche : contenu, prospection directe, ou les deux.",
      },
      {
        step: 3,
        title: "Messages",
        description: "Créer des séquences de messages adaptées à chaque situation.",
      },
      {
        step: 4,
        title: "Routine",
        description: "Mettre en place une routine LinkedIn quotidienne de 20 minutes.",
      },
    ],
    faq: [],
    keywords: [
      "prospection LinkedIn",
      "LinkedIn B2B",
      "développement réseau LinkedIn",
    ],
  },
  {
    slug: "prospection-telephonique",
    title: "Prospection Téléphonique",
    shortTitle: "Téléphone",
    description:
      "Décrocher son téléphone sans appréhension, structurer ses appels et obtenir des rendez-vous qualifiés.",
    hero: "Le téléphone reste l'outil le plus efficace. Apprenez à vous en servir.",
    problems: [
      "Vous appréhendez de décrocher votre téléphone",
      "Vous ne savez pas comment structurer un appel",
      "Vous obtenez beaucoup de refus et perdez confiance",
      "Vous n'arrivez pas à passer les barrages secrétariat",
    ],
    benefits: [
      "Une méthode structurée pour vos appels de prospection",
      "Des techniques pour passer les barrages",
      "Une gestion des refus et des objections",
      "Plus de confiance pour décrocher le téléphone",
    ],
    process: [
      {
        step: 1,
        title: "Préparation",
        description: "Préparer ses appels : liste, objectif, script, mental.",
      },
      {
        step: 2,
        title: "Structure d'appel",
        description: "Maîtriser les étapes d'un appel de prospection efficace.",
      },
      {
        step: 3,
        title: "Objections",
        description: "Répondre aux refus les plus fréquents sans perdre pied.",
      },
      {
        step: 4,
        title: "Suivi",
        description: "Mettre en place un système de suivi et de relance.",
      },
    ],
    faq: [],
    keywords: [
      "prospection téléphonique",
      "phoning commercial",
      "appel de prospection",
    ],
  },
  {
    slug: "emailing-b2b",
    title: "Emailing B2B",
    shortTitle: "Emailing",
    description:
      "Créer des séquences d'emails de prospection qui génèrent des réponses et des rendez-vous.",
    hero: "Des emails que vos prospects lisent et auxquels ils répondent.",
    problems: [
      "Vos emails de prospection restent sans réponse",
      "Vous ne savez pas quoi écrire ni comment structurer vos messages",
      "Vous avez peur que vos emails finissent en spam",
      "Vous n'avez pas de séquence de relance",
    ],
    benefits: [
      "Des templates d'emails adaptés à votre activité",
      "Une séquence de relance efficace",
      "Des taux de réponse améliorés",
      "Un ton adapté à vos prospects",
    ],
    process: [
      {
        step: 1,
        title: "Analyse",
        description: "Comprendre votre cible et ce qui la motive à répondre.",
      },
      {
        step: 2,
        title: "Rédaction",
        description: "Créer des templates courts, percutants et humains.",
      },
      {
        step: 3,
        title: "Séquence",
        description: "Mettre en place une séquence de relance en 3 à 5 étapes.",
      },
      {
        step: 4,
        title: "Tests",
        description: "Tester et améliorer selon les résultats.",
      },
    ],
    faq: [],
    keywords: [
      "emailing B2B",
      "email de prospection",
      "séquence email commerciale",
    ],
  },
  {
    slug: "mise-en-place-crm",
    title: "Mise en Place CRM",
    shortTitle: "CRM",
    description:
      "Choisir et mettre en place un CRM adapté à votre taille pour ne plus jamais perdre un contact ou oublier une relance.",
    hero: "Un CRM n'est pas réservé aux grandes entreprises.",
    problems: [
      "Vous gérez vos contacts sur Excel ou dans votre tête",
      "Vous oubliez de relancer des prospects",
      "Vous n'avez pas de visibilité sur vos opportunités",
      "Vous avez essayé des CRM mais abandonné",
    ],
    benefits: [
      "Un CRM adapté à vos besoins réels",
      "Une prise en main accompagnée",
      "Un processus de saisie simple et régulier",
      "Plus aucune relance oubliée",
    ],
    process: [
      {
        step: 1,
        title: "Choix de l'outil",
        description: "Sélectionner le CRM adapté à votre activité et votre budget.",
      },
      {
        step: 2,
        title: "Configuration",
        description: "Paramétrer le CRM selon votre processus commercial.",
      },
      {
        step: 3,
        title: "Formation",
        description: "Maîtriser l'outil et intégrer les bonnes habitudes.",
      },
      {
        step: 4,
        title: "Suivi",
        description: "S'assurer que l'outil est bien utilisé dans la durée.",
      },
    ],
    faq: [],
    keywords: [
      "CRM TPE",
      "logiciel CRM auto-entrepreneur",
      "outil CRM gratuit",
    ],
  },
  {
    slug: "ia-pour-la-vente",
    title: "IA pour Gagner du Temps",
    shortTitle: "Intelligence Artificielle",
    description:
      "Utiliser l'intelligence artificielle pour automatiser les tâches répétitives et se concentrer sur la relation client.",
    hero: "L'IA ne remplace pas le commercial. Elle lui fait gagner 2 heures par jour.",
    problems: [
      "Vous passez trop de temps sur des tâches administratives",
      "Vous ne savez pas comment utiliser l'IA concrètement",
      "Vous avez peur que l'IA donne un ton impersonnel",
      "Vous n'avez pas le temps d'apprendre de nouveaux outils",
    ],
    benefits: [
      "Des outils IA sélectionnés et testés pour votre activité",
      "Des prompts prêts à l'emploi pour vos cas d'usage",
      "Un gain de temps mesurable sur vos tâches quotidiennes",
      "Garder un ton humain tout en automatisant",
    ],
    process: [
      {
        step: 1,
        title: "Identification",
        description: "Identifier vos tâches les plus chronophages et automatisables.",
      },
      {
        step: 2,
        title: "Sélection",
        description: "Choisir les outils IA adaptés à vos cas d'usage.",
      },
      {
        step: 3,
        title: "Formation",
        description: "Apprendre à utiliser l'IA de façon efficace et sécurisée.",
      },
      {
        step: 4,
        title: "Intégration",
        description: "Intégrer l'IA dans vos routines commerciales quotidiennes.",
      },
    ],
    faq: [],
    keywords: [
      "IA pour commerciaux",
      "intelligence artificielle vente",
      "ChatGPT prospection",
    ],
  },
  {
    slug: "formation-commerciale",
    title: "Formation Commerciale Individuelle",
    shortTitle: "Formation",
    description:
      "Une formation pratique sur mesure, en individuel, pour monter en compétence rapidement sur les fondamentaux de la vente.",
    hero: "La formation commerciale la plus efficace est celle adaptée à votre situation.",
    problems: [
      "Vous n'avez jamais reçu de formation commerciale formelle",
      "Vous avez suivi des formations génériques mais peu applicables",
      "Vous manquez de bases solides sur certains aspects de la vente",
      "Vous avez besoin de monter en compétence rapidement",
    ],
    benefits: [
      "Une formation adaptée à votre niveau et vos lacunes",
      "Des exercices pratiques applicables immédiatement",
      "Un suivi personnalisé entre les sessions",
      "Des résultats mesurables dès les premières semaines",
    ],
    process: [
      {
        step: 1,
        title: "Évaluation",
        description: "Identifier vos points forts et vos axes de progression prioritaires.",
      },
      {
        step: 2,
        title: "Programme",
        description: "Construire un programme de formation adapté à vos besoins.",
      },
      {
        step: 3,
        title: "Sessions",
        description: "Sessions hebdomadaires en visioconférence avec exercices pratiques.",
      },
      {
        step: 4,
        title: "Application",
        description: "Mise en pratique immédiate et retours sur vos actions terrain.",
      },
    ],
    faq: [],
    keywords: [
      "formation commerciale individuelle",
      "coaching commercial",
      "formation vente TPE",
    ],
  },
  {
    slug: "accompagnement-mensuel",
    title: "Accompagnement Commercial Mensuel",
    shortTitle: "Accompagnement mensuel",
    description:
      "Un accompagnement continu pour maintenir votre dynamique commerciale, ajuster vos actions et progresser mois après mois.",
    hero: "La régularité fait la différence. Restez accompagné dans la durée.",
    problems: [
      "Vous avancez par à-coups et perdez votre élan commercial",
      "Vous avez du mal à maintenir une activité commerciale régulière",
      "Vous avez besoin d'un regard extérieur sur vos actions",
      "Vous voulez progresser mais manquez de structure",
    ],
    benefits: [
      "Un point mensuel pour analyser vos résultats",
      "Des ajustements réguliers de votre stratégie",
      "Un regard extérieur bienveillant et expert",
      "Une progression continue et mesurable",
    ],
    process: [
      {
        step: 1,
        title: "Mise en place",
        description: "Définir les objectifs et les indicateurs de suivi.",
      },
      {
        step: 2,
        title: "Points mensuels",
        description: "Session mensuelle de 90 minutes pour analyser et ajuster.",
      },
      {
        step: 3,
        title: "Disponibilité",
        description: "Accès par email ou message entre les sessions pour les questions urgentes.",
      },
      {
        step: 4,
        title: "Bilan trimestriel",
        description: "Bilan approfondi tous les 3 mois pour réajuster la stratégie.",
      },
    ],
    faq: [],
    keywords: [
      "accompagnement commercial mensuel",
      "coaching commercial continu",
      "suivi commercial TPE",
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
