function studentgradegenerator()
{
    let marks
    do
    {
    marks=prompt("Please enter marks");
    marks = parseInt(marks);
    if(isNaN (marks) || marks<=0|| marks>100){
        console.log ("please input marks");
      }
    }while (isNaN (marks) || marks<=0|| marks>100);
    
    let grade; 
    if (marks>=79){
        grade ='A'
    }else if (marks>=60){
        grade ='B'
    }else if (marks>=49){
        grade ='C'
    }else if (marks>=40){
        grade ='D-'
    }else{
        grade ='E'
    }
    console.log(`Marks: ${marks}, Grade: ${grade}`);
    }
    studentgradegenerator()
