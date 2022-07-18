function guessNum()
{

    const random=Math.floor(Math.random()*10)+1;
    let num=parseInt(prompt("choose number between 1 and 10"));

    while(num!==random)
    {
       num=parseInt(prompt("try again"));
    }
    }
    if (num==random)
    {
        console.log("congratulations");
    }


guessNum();
}