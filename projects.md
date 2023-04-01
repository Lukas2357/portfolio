---
layout: default
title: Projects
permalink: /projects/
---

# My Data Science Projects
Below you will find a list of my data science projects. Click on the project title or image for more details.

<div id="projects">
  {% for project in site.projects %}
    <div class="project">
      <a href="{{ project.internal_url | relative_url }}">
        <img src="{{ project.image }}" alt="{{ project.title }}" />
        <h2>{{ project.title }}</h2>
      </a>
      <p>{{ project.description }}</p>
      {% if project.external_url %}
        <p><a href="{{ project.external_url }}" target="_blank">View on GitHub</a></p>
      {% endif %}
    </div>
  {% endfor %}
</div>

