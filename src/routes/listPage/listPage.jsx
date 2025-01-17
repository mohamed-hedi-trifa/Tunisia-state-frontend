import { useSearchParams, useLoaderData } from 'react-router-dom';
import Card from '../../components/card/Card';
import apiRequest from "../../lib/apiRequest";
import { useEffect, useState } from "react";
import Filter from '../../components/filter/Filter';
import Map from '../../components/map/Map';
import './listPage.scss'
// http://localhost:5173/list?type=rent&city=London&minPrice=1000&maxPrice=5000
// http://localhost:5173/list?type=rent&city=london&minPrice=1000&maxPrice=5000
function ListPage() {

    const [posts, setPosts] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [searchParams] = useSearchParams();

    useEffect(() => {
        const fetchPosts = async () => {
          setLoading(true);
          setError(null);   
          try {
            const query = window.location.search; 
            const response = await apiRequest(`/post${query}`);
            setPosts(response.data); 
          } catch (err) {
            setError("Error loading posts!");
          } finally {
            setLoading(false); 
          }
        };
    
        fetchPosts();
      }, [searchParams]);


    const data = useLoaderData()
    return (
        <div className="listPage">
            <div className="listContainer">
                <div className="wrapper">
                    <Filter />
                    {loading && <p>Loading...</p>}
                    {error && <p>{error}</p>}
                    {!loading && !error && posts && posts.length > 0 ? (
                        posts.map((post) => <Card key={post.id} item={post} />)
                    ) : (
                        !loading && !error && <p>No posts found!</p> // Handle empty posts
                    )}

                    {/* 3:15 */}
                    {/* https://reactrouter.com/6.28.0/guides/deferred */}
                    {/* <Await
                        resolve={data.postResponse}
                        errorElement={<p>Error loading posts!</p>}
                    >
                        {(postResponse) => {
                            console.log("Post Response:", postResponse); // Log resolved data
                            return postResponse.data.map((post) => <Card key={post.id} item={post} />);
                        }}
                    </Await> */}



                </div>
            </div>
            <div className="mapContainer">
                {/* <Map items={posts} /> */}
                {loading && <p>Loading...</p>}
                {error && <p>{error}</p>}
                {!loading && !error && posts && posts.length > 0 ? (
                    <Map items={posts} />
                ) : (
                    !loading && !error && <p>No posts found!</p> // Handle empty posts
                )}
            </div>
        </div>
    )
}

export default ListPage