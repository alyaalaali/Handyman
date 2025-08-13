
const Home = () => {
  return (
    <>
    <div className="home-container">
      <h1>Handyman App</h1>
      <img src="public/images/carpenter.png" alt="handyman-app" />
      {/* <img src="public/images/non_2x/services-logo-template-maintenance-work-icon-vector.jpg" alt="handyman-app" /> */}

      <p>Connect with trusted service providers and get the help you need — all in one place.
        Whether you’re requesting a service or offering your skills, our platform makes managing requests, reviews, and communication simple and efficient.</p>
    </div>

    <div className="home-categories">
      <h2>Categories</h2>
      <div className="home-categories-2">

      <div className="one-category">
        <img src="public/images/carpenter.png" alt="" />
        <h3>Carpenter</h3>
        <p>Carpenters are skilled tradespeople who work with wood and other materials to construct, install, and repair structures and fixtures. Their work includes building frameworks, furniture, cabinetry, doors, windows, and flooring.</p>
      </div>

      <div className="one-category">
        <img src="public/images/cleaning.png" alt="" />
        <h3>Cleaning</h3>
        <p>The process of removing dirt, dust, stains, germs, and unwanted substances from surfaces, objects, or environments. It is essential for maintaining hygiene, health, and a pleasant appearance in homes, workplaces, and public areas.</p>
      </div>

      <div className="one-category">
        <img src="public/images/electrician.png" alt="" />
        <h3>Electrician</h3>
        <p>An Electrician is a skilled tradesperson who installs, maintains, and repairs electrical systems in homes, businesses, and industrial settings. Their work involves wiring buildings, installing lighting and power systems, troubleshooting electrical faults, and ensuring systems comply with safety regulations. Electricians may specialize in construction, maintenance, or industrial electrical work.</p>
      </div>

      <div className="one-category">
        <img src="public/images/painter.png" alt="" />
        <h3>Painter</h3>
        <p>Painting is the process of applying color, pigment, or protective coating to surfaces such as walls, ceilings, furniture, or structures. It enhances the appearance, preserves materials from damage (like rust or moisture), and contributes to the overall aesthetics of a space.</p>
      </div>

      </div>



    </div>

    <div className="connect-us">
      <p><strong>Contact number: </strong> +973 1700 1700</p>
      <p><strong>Email: </strong> Handy.man2025@gmail.com</p>
      <p><strong>Location: </strong> Everywere in Bahrain</p>
      <p><strong>About: </strong><p>For more information or to give us additional ideas, just let us know either by calling or by sending an email.</p> </p>
      
    </div>
    </>
  )
}
export default Home
