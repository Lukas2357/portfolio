---
layout: default
title: Projects
---

# Data Science Projects
Below you will find a list of my data science projects. Click on the project image for more details or check the link to the GitHub page.

<div id="projects">
{% for project in site.data.projects %}
  <div class="project">
    <a href="{{ site.baseurl }}/projects/{{ project.title | slugify }}">
      <div class="project-title-image-container">
        <img class="project-image" src="{{ site.baseurl }}/assets/images/{{ project.image }}" alt="{{ project.title }} image" />
      </div>
    </a>
    <h2>{{ project.title }}</h2>
    <p>{{ project.description }}</p>
    <p><a href="{{ project.external_url }}" target="_blank">View on GitHub</a></p>
  </div>
{% endfor %}
</div>

