import '../styles/styles.css'


const BlogSection = () => {
    return(
        <>         

        <section className="section blog-section" id="blogSection" data-aos="fade-down">
            <div  className="blog-container"> 
                <h4 >BLOGS</h4> <br />

                <div className="blog-cards" >             
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-5 col-xl-4">
                            <img className="img-fluid" src="https://blog.emborromeo.com/wp-content/uploads/2021/11/testing-the-API-i-made-by-creating-a-firefox-add-on-called-stoic-sayings-tab.png" alt="featured"/>
                        </div>

                        <div className="col-12 col-md-6 col-lg-7 col-xl-8 container-fluid">
                            <a href="https://blog.emborromeo.com/testing-the-api-i-made-by-creating-a-firefox-add-on-called-stoic-sayings-tab/" target="_blank">
                            <h5 className="blog-title">Testing the API I made by creating a firefox add-on called stoic sayings tab🗿</h5> </a>
                            <p className="blog-description">
                            I’ve been really interested in learning about APIs these past few weeks. But it’s quite a challenge for me to start an online course about it. Or if ever I get the motivation to start a LinkedIn course, finishing a 5-10 minute video seemed impossible for me...</p>
                        </div>  
                    </div>
                </div>

                <div className="blog-cards">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-5 col-xl-4">
                            <img className="img-fluid" src="https://blog.emborromeo.com/wp-content/uploads/2021/09/blog1.png" alt="featured"/>
                        </div>

                       <div className="col-12 col-md-6 col-lg-7 col-xl-8 container-fluid">
                            <a href="https://blog.emborromeo.com/learning-api-by-creating-weather-wall-a-simple-forercast-app-using-react-and-open-weather-map/" target="_blank">
                            <h5 className="blog-title">Learning API by creating weather wall: a simple forecast app using react and open weather map⛅️</h5> </a>
                            <p className="blog-description">

                            In this blog post, we are going to make a 5-day forecast app using React and an API. For this first part, we will focus on fetching the api from open weather map. Let’s use Manila, but it’s up to you which city you want to use. Also we will display the temperature...  
                            </p>
                        </div>  
                    </div>
                </div>

                <div className="blog-cards">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-5 col-xl-4">
                            <img className="img-fluid" src="https://blog.emborromeo.com/wp-content/uploads/2021/09/blog2.png" alt="featured"/>
                        </div>

                       <div className="col-12 col-md-6 col-lg-7 col-xl-8 container-fluid">
                            <a href="https://blog.emborromeo.com/understanding-the-difference-between-git-and-github-%f0%9f%92%a1/" target="_blank">
                            <h5 className="blog-title">Understanding the difference between Git and Github💡</h5>
                            </a>
                            <p className="blog-description">
                            Imagine you are coloring on a flower coloring book. You colored in green for all leaves and now it’s time for the best part, coloring the petal. You know you enjoy red the best but it looked horrible after you finished it. With Git, you can revert your choice of red in a heartbeat...</p>
                        </div>  
                     
                    </div>
                </div>

                <div className="blog-cards">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-5 col-xl-4">
                            <img className="img-fluid" src="https://blog.emborromeo.com/wp-content/uploads/2021/08/build-a-harry-potter-character-search-web-app-with-hp-api-1024x768-1.png" alt="featured"/>
                        </div>

                       <div className="col-12 col-md-6 col-lg-7 col-xl-8 container-fluid">
                            <a href="https://blog.emborromeo.com/build-a-harry-potter-character-search-web-app-with-hp-api/" target="_blank">
                            <h5 className="blog-title">Build a harry potter character search web app with hp api⚡</h5>
                            </a>
                            <p className="blog-description">
                            We have a choice here which API we’re going to use, either www.potterapi.com or this one hp-api.herokuapp.com. Both API are good, but I’ll be using the latter, since we’re only making a character search. But of course, you can use Potter API and just add a few...
                            </p>
                        </div>  
                    </div>
                </div>
                
                <div className="blog-cards">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-5 col-xl-4">
                            <img className="img-fluid" src="https://blog.emborromeo.com/wp-content/uploads/2021/08/affordable-coding-training-centers-in-the-philippines-1024x768-1.png" alt="featured"/>
                        </div>

                       <div className="col-12 col-md-6 col-lg-7 col-xl-8 container-fluid">
                            <a href="https://blog.emborromeo.com/affordable-coding-training-centers-for-students-and-beginners-in-the-philippines/" target="_blank">

                            <h5 className="blog-title">Affordable coding training centers for students and beginners in the Philippines👨🏻‍🏫</h5>
                            </a>
                            <p className="blog-description">
                            The software industry is becoming more known and acknowledged these times, and the demand for programmers is getting higher. Some even change their careers from a not related job to being a developer by applying to bootcamp... 
                            </p>
                       </div>  
                    </div>
                </div>


            </div>

        </section>
     
        </>
    )



}


export default BlogSection