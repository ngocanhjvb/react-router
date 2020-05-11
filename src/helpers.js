export   const getManyHobbies = async () => {
    const response = await fetch('http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1');
    const responseData = await response.json();
    return responseData
}
