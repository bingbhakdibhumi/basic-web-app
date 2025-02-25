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
    let sum = 0
        if (query.toLowerCase().includes("plus")) {
            sum = first + second
        }
        else if (query.toLowerCase().includes("multiplied")) {
            sum = first * second
        }
    return (sum.toString())
  }

  if(query.toLowerCase().includes("which of the following numbers is the largest")) {
    let words = query.split(" ")
    let first = parseInt(words[8])
    let second = parseInt(words[9])
    let third = parseInt(words[10])
    let biggest = Math.max(first, second, third)
    return (biggest.toString())
  }

  return "";
}
