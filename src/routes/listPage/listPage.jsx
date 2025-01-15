import { Await, useLoaderData } from 'react-router-dom';
import Card from '../../components/card/Card';
import Filter from '../../components/filter/Filter';
import Map from '../../components/map/Map';
import { listData } from '../../lib/dummydata'
import './listPage.scss'
import { Suspense } from 'react';
// http://localhost:5173/list?type=rent&city=London&minPrice=1000&maxPrice=5000
// http://localhost:5173/list?type=rent&city=london&minPrice=1000&maxPrice=5000
function ListPage () {

    const posts = useLoaderData()
    return (
        <div className="listPage">
          <div className="listContainer">
                <div className="wrapper">
                    <Filter/>
                    {/* 3:15 */}
                    <Suspense fallback={<p>Loading...</p>}>
                        <Await
                        >

                        </Await>

                    </Suspense>



                    {
                        posts.map (item => (
                            <Card key={item.id} item={item}/>
                        ))
                    }
                </div>
          </div>
          <div className="mapContainer">
            <Map items={posts}/>
          </div>
        </div>
    )
}

export default ListPage