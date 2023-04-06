---
layout: project
title: "OpticsLab"
---

<div class="container">
  <div class="content-section">
    <div class="content-text">
      <h3>Objective</h3>
      Develop a repository with software that can easily be applied by anyone who wants to simulate and analyse (nano-)optical measurements.
      <h3>Technologies</h3>
      <ul class="technologies">
        <li>Programming languages: MATLAB, Python, LabVIEW </li>
        <li>Techniques: Fitting, Time series analysis, Autocorrelation analysis, Fourier transform, numeric simulation, ... </li>
      </ul>
      <h3>Components</h3>
      <ul>
      	<li>Plot and fit of axial/lateral confocal intensity scans</li>
      	<li>Calculate dipole collection efficiency in the far field</li>
      	<li>Analysis of saturation measurements on single emitters</li>
      	<li>Simulation of focusing a beam into a dielectric medium</li>
      	<li>Compute reflection and transmission from Fresnel coefficients</li>
      	<li>Analysis of emitter antibunching in continuous/pulsed mode</li>
      	<li>Simulation of emitter antibunching in continuous/pulsed mode</li>
      	<li>Lifetime plot and fitting for SiV color centers </li>
      	<li>Spectral fit program for SiV color centers or other emitters</li>
      </ul>
      <h3>Links</h3>
      	<p><a href="https://github.com/Lukas2357/opticslab" target="_blank">GitHub Repository</a></p>
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