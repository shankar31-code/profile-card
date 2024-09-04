function passphrase(str)
{
    const wordpattern=/^[a-zA-Z0-9]+$/;
    const words=str.split(/[\s-_]+/);
    if(words.length<4)
    {
        return false;
    }
    for(const word of words)
    {
        if(!wordpattern.test(word))
        {
            return false;
        }
    }
    return true;
}
const example1 = "apple-banana-cherry";
const example2 = "simple_password";
const example3 = "justoneword";
const example4 = "This is a test";
console.log(passphrase(example1));
console.log(passphrase(example2));
console.log(passphrase(example3));
console.log(passphrase(example4));