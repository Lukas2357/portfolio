---
layout: project
title: "ProSRL"
---

<div class="container">
  <div class="content-section">
    <div class="content-text">
      <h3>Objective</h3>
      Analyse the behaviour of students on an online learn-platform and identify patterns related to their learning outcome and personal character attributes.
      <h3>Technologies</h3>
      <ul class="technologies">
        <li>Programming languages: Python </li>
        <li>Libraries: Pandas, scikit-learn, selenium, matplotlib </li>
        <li>Techniques: Web scrapping, Time series analysis, Plotting, Feature engineering, clustering, classification... </li>
      </ul>
      <h3>Components</h3>
      	<li>Crawler for the webpage to retrieve structure and metadata</li>
      	<li>Data preparation to make user logs ready for analysis</li>
      	<li>Feature engineering to extract user characteristics</li>
      	<li>Clustering module to identify user categories</li>
      	<li>Regression module to study learning success</li>
      	<li>Plotting modules to visualize user timeseries</li>
      <h3>Links</h3>
      	<p><a href="https://github.com/Lukas2357/ProSRL" target="_blank">GitHub Repository</a></p>
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