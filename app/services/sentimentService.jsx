export function analyzeSentiment(review) {
  const text = review.toLowerCase();

  if (
    text.includes("good") ||
    text.includes("great") ||
    text.includes("excellent") ||
    text.includes("amazing") ||
    text.includes("awesome")
  ) {
    return "Positive 😊";
  }

  if (
    text.includes("bad") ||
    text.includes("poor") ||
    text.includes("worst") ||
    text.includes("terrible") ||
    text.includes("dirty")
  ) {
    return "Negative 😞";
  }

  return "Neutral 😐";
}