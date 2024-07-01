function SalaryCalculator()
{
    let Salary;
    {
    Salary=prompt("Please enter Salary");
    Salary = parseInt(Salary);
    let Paye;
    let NSSF;
    let NHIF;
    let Netpay;
    if (Salary <=24000)
    {
        Paye=(Salary*0.1);
        NSSF=0.06*Salary;
        NHIF=750;
        Netpay=Salary-Paye-NHIF-NSSF;
    }
                else if 
        (Salary >=24001 && Salary <= 32333)
        {
        Paye=(Salary*0.25);
        NSSF=0.06*Salary;
        NHIF=1000;
        Netpay=Salary-Paye-NHIF-NSSF;
        }
                else if  
        (Salary >=32334 && Salary <= 50000)
        {
        Paye=(Salary*0.3);
        NSSF=0.06*Salary;
        NHIF=1700;
        Netpay=Salary-Paye-NHIF-NSSF;
                }
                else if
        (Salary >=500001 && Salary <=80000)
        {
        Paye=(Salary*0.325);
        NSSF=0.06*Salary;
        NHIF=1700;
        Netpay=Salary-Paye-NHIF-NSSF;
                }else
                (Salary >80000)
                {
        Paye=(Salary*0.35);
        NSSF=0.06*Salary;
        NHIF=1700;
        Netpay=Salary-Paye-NHIF-NSSF;
                }
     console.log(`Your Salary is ${Netpay}:'Nssf ${NSSF} 'NHIF ${NHIF} Paye  ${Paye}`);
    }
}
SalaryCalculator();