---
layout: project
title: "slurm"
---

<div class="container">
  <div class="content-section">
    <div class="content-text">
      <h3>Objective</h3>
      Analyse the slurm data of JLU high performance computing cluster from the last 2,5 years by explorative data analysis and machine learning to get insights into user behaviour.
      <h3>Technologies</h3>
      <ul class="technologies">
        <li>Programming languages: Python</li>
        <li>Libraries: Pandas, scikit-learn, plotly, dash, pycaret, seaborn, ipywidgets </li>
        <li>Techniques: EDA, data preprocessing pipelines, clustering, classification, random forest, xgboost, lightgbm, ... </li>
      </ul>
      <h3>Components</h3>
      <ul>
      	<li>Notebook for data preparation in pipeline</li>
      	<li>Notebook for interactive EDA using ipywidgets</li>
      	<li>Notebook for clustering of users and accounts</li>
      	<li>Notebook to predict failing jobs using pycaret</li>
      </ul>
      <h3>Links</h3>
      	<p><a href="https://gitlab.ub.uni-giessen.de/so7019/slurm" target="_blank">GitLab Repository (private)</a></p>
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