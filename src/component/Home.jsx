import React from 'react'
import '../index.css'
import One from './One';
import Two from './Two';
import Three from './Three';






function Home() {
  const Myfunction =(e)=>{
    console.log(e.target.value)
    let a = e.target.value;
    if (a === "1") {
      return <One/>;
    } else if (a === "2") {
      return <Two/>;
    } else if (a === "3") {
      return <Three/>;
    } else {
      return null;
    }
  };

    return (
        <div>
            <div className='containe main'>
                <div className='row'>
                    <div className='col-12'>
                        <div className="input-group mb-3">
                            <select className="form-select" id="inputGroupSelect02" onChange={Myfunction}>
                                <option selected>Choose...</option>
                                <option defaultValue="1">One</option>
                                <option defaultValue="2">Two</option>
                                <option defaultValue="3">Three</option>
                            </select>
                            <label className="input-group-text" htmlFor="inputGroupSelect02">Options</label>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
