const checkQuery = (query) => {
    const queryArr =  query.split(' ');
    const newQuery = [];

    queryArr.forEach(word => {
        console.log(word);
        const splitQueryWord = word.split('');
        const firstLetter = splitQueryWord.shift().toUpperCase();
        splitQueryWord.join();
        // console.log(splitQueryWord);
    });

    // console.log(newQuery);
}

export default checkQuery;