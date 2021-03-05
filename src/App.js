import React,{Component} from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends Component{
  state={
    chance:'1',
    p2:["0", "0", "0", "0", "0", "0", "0", "0", "0"]
    

  }

  onver=(dat)=>{
    let boxColor=this.state.p2;
    if(boxColor[dat]==='1')
    {
      return "alert alert-warning"

    }
    else if(boxColor[dat]==='2')
    {
      return "alert alert-danger"

    }

    

    
    return  "alert alert-secondary";
    
    
    
    
  

}


onClick = e => {
  let a=this.state.chance;
  let index=parseInt(e.target.id);
  let p=this.state.p2;
  
  
  if(p[index]==='0')
  {
    if(a==='1')
    {
      p[index]="1";
      this.setState({...this.state,chance:'2'})
      // e.target.className="alert alert-warning";
      this.setState({p2:p})
      this.check(p,'1');
      
     
      

    }
    else
    {
      p[index]="2";
      this.setState({...this.state,chance:'1'});
      // e.target.className="alert alert-danger";
      this.setState({p2:p})
      this.check(p,'2');
      

    }
    
    
    
    
  }

}
modcheck = (val1,val2) =>{
  let result=val1-val2;
  if(result < 0 )
  {
    return -result;

  }
  
  return result
} 


check = (win,id) =>{
 
  let st=[],h=[],c=[],d=[],ts=0,id1=id;
  let initialstate=["0", "0", "0", "0", "0", "0", "0", "0", "0"];
  let coun = win.map((e,v)=> {
    if (e=== id) st.push(v)
    

  });
  
  st.map(s =>
    {
      let a =st.length;
      d=[];
      c=[];
      h=[];
      ts=0;
      let vs=0,cs=0;
      

  // console.log("searching ",s,"inital ",c)
    for(var i=0;i<=8;i++)
    { 
      
     
      
      if(win[i]===id)
      {
        
        //down
        if(d.indexOf(i)===-1)
        {
          
          
          
          if((this.modcheck(s,i)===3)||(this.modcheck(s,i)===0))
          {
            ts=ts+1;
           
            d.push(i);
          }
        }
        if((ts===3) ){
          this.setState({p2:initialstate})
          alert("you win down player"+id1)
          
        }
        //cross
        if(c.indexOf(i)===-1)
        {
          
          // console.log( "distance from:",s,"to:",i,"is",this.modcheck(s,i))
          
          if((this.modcheck(s,i)===4)||(this.modcheck(s,i)===0))
          {
            cs=cs+1;
           
            c.push(i);
         

          }
        }
        if((cs===3) ){
          this.setState({p2:initialstate});
          alert("you win cross player"+id1);
          
        }
  

        //ho
        if(h.indexOf(i)===-1)
        {
          
          
          
          if((this.modcheck(s,i)===1)||(this.modcheck(s,i)===0))
          {
            vs=vs+1;
           
            h.push(i);
          
          }
        }
        if((vs===3) )
        {
          this.setState({p2:initialstate});
          alert("you win horizntally player"+id1)
          
          
        }
       
       

      }
      
        
    
    }
    // if(id==='1') console.log("search:",s,"count:",cs,"array",c)
    

   

    })
     
  



}











render(){

  return(
    

       <React.Fragment>
         <div className="container-fluid pt-5">
           <div className="p-5 ml-auto mr-auto">
        
         <table className="alert alert-primary">
           <tbody>
           <tr>  
             <td className={this.onver(0)} id="0" onClick={this.onClick}>1</td>
             <td className={this.onver(1)} id="1" onClick={this.onClick}>2</td>
             <td className={this.onver(2)} id="2" onClick={this.onClick}>3</td>
           </tr>
           <tr>
             <td className={this.onver(3)} id="3" onClick={this.onClick}>4</td>
             <td className={this.onver(4)} id="4" onClick={this.onClick}>5</td>
             <td className={this.onver(5)} id="5" onClick={this.onClick}>6</td>
           </tr>
           <tr>
             <td className={this.onver(6)} id="6" onClick={this.onClick}>7</td>
             <td className={this.onver(7)} id="7" onClick={this.onClick}>8</td>
             <td className={this.onver(8)} id="8" onClick={this.onClick}>9</td>
           </tr>
           </tbody>
         </table>
         </div>
         </div>

      </React.Fragment>
      )




}




}

export default App;
