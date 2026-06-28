export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export const faqItems: FaqItem[] = [
  {
    category: "L'audit gratuit",
    question: "L'audit commercial est-il vraiment gratuit ?",
    answer:
      "Oui, entièrement et sans condition. Cet audit me permet de comprendre votre situation et de vous apporter une première valeur concrète. Il n'y a aucune obligation de travailler ensemble ensuite. Si vous ne souhaitez pas poursuivre, vous repartez avec un diagnostic utile.",
  },
  {
    category: "L'audit gratuit",
    question: "Que se passe-t-il lors de l'audit ?",
    answer:
      "Nous faisons un point sur votre activité, vos objectifs commerciaux, votre processus actuel et vos principales difficultés. À l'issue de cet échange, je vous donne un diagnostic honnête de votre situation et des recommandations concrètes.",
  },
  {
    category: "L'audit gratuit",
    question: "Combien de temps dure l'audit ?",
    answer:
      "L'audit se déroule en visioconférence et dure entre 45 minutes et 1 heure. Pas plus. Je sais que votre temps est précieux.",
  },
  {
    category: "L'accompagnement",
    question: "Combien coûte un accompagnement ?",
    answer:
      "Le tarif dépend du type d'accompagnement, de sa durée et de vos besoins. Je ne propose pas de forfaits génériques. Tout est construit sur mesure après l'audit initial. Les tarifs sont transparents et discutés en amont.",
  },
  {
    category: "L'accompagnement",
    question: "Combien de temps dure un accompagnement ?",
    answer:
      "Cela dépend de vos objectifs. Certains sujets (création de scripts, mise en place d'un CRM) peuvent être traités en quelques semaines. Un accompagnement de fond s'étend généralement sur 3 à 6 mois.",
  },
  {
    category: "L'accompagnement",
    question: "Travaillez-vous partout en France ?",
    answer:
      "Oui. Tous mes accompagnements se font en visioconférence. Peu importe où vous êtes en France — ou même à l'étranger si vous travaillez en français.",
  },
  {
    category: "L'accompagnement",
    question: "Je débute complètement dans la vente. Pouvez-vous m'aider ?",
    answer:
      "Absolument. Je travaille avec des profils très variés, des débutants complets aux commerciaux avec plusieurs années d'expérience. L'accompagnement est toujours adapté à votre niveau de départ.",
  },
  {
    category: "L'accompagnement",
    question: "J'ai déjà essayé plusieurs méthodes sans résultat. Pourquoi ça marcherait cette fois ?",
    answer:
      "Bonne question. La plupart des méthodes qui ne fonctionnent pas ne sont pas adaptées à votre situation réelle. Mon approche consiste d'abord à comprendre précisément votre contexte avant de proposer quoi que ce soit. Pas de solution générique. Pas de promesse irréaliste.",
  },
  {
    category: "Outils et méthodes",
    question: "Faut-il déjà avoir un CRM pour travailler ensemble ?",
    answer:
      "Non. Si vous n'en avez pas, nous pouvons en choisir un et le mettre en place ensemble. Si vous en avez déjà un, nous verrons comment mieux l'utiliser.",
  },
  {
    category: "Outils et méthodes",
    question: "Utilisez-vous des outils spécifiques ?",
    answer:
      "Je travaille avec les outils que vous avez déjà ou avec des outils adaptés à votre budget (souvent gratuits ou très abordables). Aucun investissement logiciel important n'est nécessaire pour commencer.",
  },
  {
    category: "Outils et méthodes",
    question: "Comment trouver plus de clients ?",
    answer:
      "Il n'existe pas de réponse universelle. Cela dépend de votre activité, de votre cible, de votre budget temps et de vos compétences actuelles. C'est exactement ce que nous analyserons lors de l'audit pour trouver les canaux les plus adaptés à votre situation.",
  },
  {
    category: "Garanties",
    question: "Garantissez-vous des résultats ?",
    answer:
      "Je ne garantis pas de chiffres précis car les résultats dépendent de votre implication et de votre contexte. Ce que je garantis : des méthodes testées sur le terrain, un accompagnement honnête et des recommandations applicables immédiatement.",
  },
];
