const dob=document.querySelector("#dob");
const luckyNumber=document.querySelector("#lucky-num");
const checkButton=document.querySelector("#check");
checkButton.addEventListener("click",clickHandler);
const result=document.querySelector("#output-text");

function clickHandler()
{
    var sumOfDigits=sum(dob);
    testLuck(sumOfDigits,luckyNumber);
}

function sum(dob)
{
    dob=dob.value.replaceAll("-","");
    console.log(dob);
    dob=parseInt(dob);
    var sum=0;
    while(dob > 0)
    {
        var digit=dob%10;
        sum+=digit;
        dob=Math.trunc(dob/10);
    }
    return sum;
}

function testLuck(sumOfDigits,luckyNumber)
{
    if(sumOfDigits && luckyNumber.value)
    {
        if(sumOfDigits%luckyNumber.value === 0)
        {
            result.innerText="Yayy🥳Your Birthday is Lucky";
        }
        else
        {
            result.innerText="Uff your Birthday is not sooo lucky it seems😭";
        }
    }
    else
    {
        result.innerText="Please fill all the fields";
    }

}