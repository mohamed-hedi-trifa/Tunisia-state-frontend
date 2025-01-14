import { useContext } from 'react'
import SearchBar from '../../components/searchBar/SearchBar'
import './homePage.scss'
import { AuthContext } from '../../context/AuthContext'

function HomePage () {

    // const currentUser = useContext(AuthContext)

    // console.log(currentUser)

    return (
        <div className="homePage">
            <div className="textContainer">
                <div className="wrapper">
                    <div className="title">
                        <h1>Find Real Estate & Get Your Dream Place</h1>
                        </div>
                        <p>This wasn't an easy task as the children had other priorities than to get to 
                            the gate. She knew that she was tight on time and the frustration came out 
                            as she yelled at the kids to keep up. </p>
                
                    <SearchBar/>

                    <div className="boxes">
                        <div className="box">
                            <h1>16+</h1>
                            <h2>Years of experience</h2>
                        </div>
                        <div className="box">
                            <h1>200</h1>
                            <h2>Award Gained</h2>
                        </div>
                        <div className="box">
                            <h1>2000+</h1>
                            <h2>Property Ready</h2>
                        </div>
                    </div>
                    
                    
                </div>
           
            </div>
            <div className="imgContainer">
                <img src="bg.png" alt="" />
            </div>
        </div>
    )
}

export default HomePage