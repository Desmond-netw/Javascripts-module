// extract specific parts of a string

function extractContent(content, start, end) {
  const startIndex =
    start === "" ? 0 : content.indexOf(start);
    // console.log(start + "=" + "index :"+ startIndex)

  const endIndex = content.lastIndexOf(end);
//   console.log(end +"=" + "lastIndexOf :"+ endIndex)

  return content.slice(
    startIndex,
    Array.isArray(content)
      ? endIndex + 1
      : endIndex + end.length
  );
}

const blogPosts = ['post1', 'post2', 'post3', 'post4', 'post5'];
const blogPost = 'The big brown fox';

console.log(extractContent(blogPosts, 'post2', 'post4'));
console.log(extractContent(blogPosts, '', ''));
console.log(extractContent(blogPost, '', ''));
console.log(extractContent(blogPost, 'b', 'b'));
console.log(extractContent(blogPost, 'big', 'fox'));
console.log(extractContent(blogPost, '', 'brown'));
console.log(extractContent(blogPost, 'jump', ''));