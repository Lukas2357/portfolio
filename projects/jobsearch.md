---
layout: project
title: "JobSearch"
---

<div class="container">
  <div class="content-section">
    <div class="content-text">
      <h3>Objective</h3>
      Crawl common websites offering job postings related to Data Science and save htmls to retrieve information about the jobs, requirements, etc. and make statistics about them.
      <h3>Technologies</h3>
      <ul class="technologies">
        <li>Programming languages: Python, (Postgre)SQL </li>
        <li>Libraries: Pandas, scikit-learn, matplotlib, html, selenium, sqlalchemy, multiprocessing </li>
        <li>Techniques: Web scrapping, Database engineering, html parsing, Google Maps API, TF-IDF analysis... </li>
      </ul>
      <h3>Components</h3>
      	<li>Crawler for the webpages to retrieve possible jobs</li>
      	<li>Functions to save the html and retrieve text</li>
      	<li>Multiprocessing to speed up retrieval</li>
      	<li>Module for saving possible jobs and infos to database</li>
      	<li>Analysis notebooks for the resulting data</li>
      	<li>Connector to Google maps API to calculate distances</li>
      	<li>Models to extract relevant information from texts</li>
      <h3>Links</h3>
      	<p><a href="https://github.com/Lukas2357/JobSearch" target="_blank">GitHub Repository (private)</a></p>
      </div>
    <div class="content-images">
    	<div class="image-gallery" style="position: relative; width: 80%; margin: 0 auto;">
  			<div class="image-container" style="display: flex; align-items: center; justify-content: center; height: 500px; overflow: hidden;">
			  <img src="{{ site.baseurl }}/assets/images/{{ page.title }}/image1.png" alt="Image description">
			  <img src="{{ site.baseurl }}/assets/images/{{ page.title }}/image2.png" alt="Image description" style="display: none;">
			  <img src="{{ site.baseurl }}/assets/images/{{ page.title }}/image3.png" alt="Image description" style="display: none;">
			  <img src="{{ site.baseurl }}/assets/images/{{ page.title }}/image4.png" alt="Image description" style="display: none;">
			  <img src="{{ site.baseurl }}/assets/images/{{ page.title }}/image5.png" alt="Image description" style="display: none;">
			  <img src="{{ site.baseurl }}/assets/images/{{ page.title }}/image6.png" alt="Image description" style="display: none;">
			</div>
		  <!-- Add more images as needed -->
		  <div class="gallery-controls" style="position: absolute; bottom: 50; left: 50%; transform: translateX(-50%);">
		    <button id="prev-image">Previous</button>
		    <button id="next-image">Next</button>
		  </div>
		</div>
    </div>
  </div>

<script src="{{ '/assets/js/gallery.js' | relative_url }}"></script>

</div>