function createTable()
{
row = window.prompt("Input number of rows", 1);
col = window.prompt("Input number of columns",1);
  
 for(let r=0;r<parseInt(row);r++)
  {
   let x=document.getElementById('myTable').insertRow(r);
   for(let c=0;c<parseInt(col);c++)  
    {
     let y=  x.insertCell(c);
     y.innerHTML="Row-"+r+" Column-"+c; 
    }
   }
}