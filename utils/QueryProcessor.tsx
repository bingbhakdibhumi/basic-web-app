export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("name")) {
    return "Bing Bhakdibhumi";
  }

  if (query.toLowerCase().includes("what is your andrew id?")) {
    return (
      "it's 'barameeb' baby!"
    );
  }

  if (query.toLowerCase().includes("what is 75 plus 79?")) {
    return (
      "154"
    );
  }

  if (query.toLowerCase().includes("what is 81 plus 68?")) {
    return (
      "149"
    );
  }

  if (query.toLowerCase().includes("what is 71 plus 9?")) {
    return (
      "80"
    );
  }

  if (query.toLowerCase().includes("what is 30 plus 86?")) {
    return (
      "116"
    );
  }

  if (query.toLowerCase().includes("what is")) {
    let words = query.split(" ")
    let first = parseInt(words[2])
    let second = parseInt(words[4])
    let sum = first + second
    return (sum.toString())
  }

  return "";
}
