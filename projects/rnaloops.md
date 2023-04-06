---
layout: project
title: "RNALoops"
---

<div class="container">
  <div class="content-section">
    <div class="content-text">
      <h3>Objective</h3>
      Analyse the RNALoops database to verify data integrity and identify possible clusters of RNA multiloop structures that can be further studied with folding algorithms.
      <h3>Technologies</h3>
      <ul class="technologies">
        <li>Programming languages: Python, (My)SQL, c++ </li>
        <li>Libraries: Pandas, scikit-learn, matplotlib, textract, selenium, tensorflow, keras </li>
        <li>Techniques: Web scrapping, 3D structure analysis, Plotting, Feature engineering, clustering, regression... </li>
      </ul>
      <h3>Components</h3>
      <ul>
      	<li>Crawler for the webpage to retrieve database pdfs</li>
      	<li>Parser for pdf documents of RNA structures</li>
      	<li>Module to verify integrity of data (check structures)</li>
      	<li>Comparison with other databases</li>
      	<li>Clustering of similar structures according to angles</li>
      	<li>Overview plots for clusters with many details</li>
      	<li>Prediction of structure angles using neural network</li>
      </ul>
      <h3>Links</h3>
      	<p><a href="https://github.com/Lukas2357/RNALoops" target="_blank">GitHub Repository</a></p>
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