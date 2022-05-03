---
title: "New German Virtual Herbarium Online"
date:  2021-05-03 12:00:00 +0200
#categories: ["Getting started", "VH/de website"]
lang-ref: new_vh
background: /assets/images/entry_page2.jpg
#composition:
#  - type: postHeader # the block type
#  - data: home.stats
#    type: stats
#  - type: pageMarkdown # This will render the markdown in this file

---

Since 2015, the German Virtual Herbarium has offered online access to specimens held in German herbaria that have been digitised so far. Even though the [old data portal](https://search.biocase.de/vh) allowed searching for specimens based on a wide range of criteria, the software was beginning to show its age with respect to both functionality and usability. For this reason, a new website has been established: founded on software developed by and hosted on servers of the [Global Biodiversity Information Facility (GBIF)](https://www.gbif.org), it offers state-of-the-art views of the specimens as lists, on a map or in a gallery as well as filters on *all* data items (more on the features can be found in [this news item](/post/2022/features-explained/)).

![Gallery view of the German Virtual Herbarium](/assets/images/gallery_view.jpg){:standalone .has-text-centered}

The German Virtual herbarium is a showcase for German herbaria. At its launch in May 2022, it allowed access to almost [one million digitised specimens](/data?view=TABLE) held in [22 herbaria](/data?view=DATASETS). The data portal is based on GBIF’s index database, meaning that all GBIF-mediated specimens of German herbaria will also be accessible through the Virtual Herbarium. Over 300,000 of the records come with at least one [digital image of the specimen](/data?view=GALLERY).

<table>
  <tr>
	<td style="text-align:center">
		<a href="/data?view=TABLE"><h3><span data-ajax-url="https://api.gbif.org/v1/occurrence/search?networkKey=3aee7756-565e-4dc5-b22c-f997fbd7105c&limit=0">xx</span></h3>
		Herbarium specimens</a>
	</td>
    <td style="text-align:center">
		<a href="https://www.gbif.org/network/3aee7756-565e-4dc5-b22c-f997fbd7105c/dataset"><h3><span data-ajax-url="https://api.gbif.org/v1/network/3aee7756-565e-4dc5-b22c-f997fbd7105c/constituents?limit=0">xx</span></h3>
		Datasets</a>
    </td>
    <td style="text-align:center">
		<a href="https://www.gbif.org/network/3aee7756-565e-4dc5-b22c-f997fbd7105c/publisher"><h3><span data-ajax-url="https://api.gbif.org/v1/network/3aee7756-565e-4dc5-b22c-f997fbd7105c/organization?limit=0">xx</span></h3>
		Publishing institutions</a>
    </td>
    <td style="text-align:center">
		<a href="/data?view=GALLERY"><h3><span data-ajax-url="https://api.gbif.org/v1/occurrence/search?mediaType=StillImage&networkKey=3aee7756-565e-4dc5-b22c-f997fbd7105c&limit=0">xx</span></h3>
		Specimens with images</a>
    </td>
  </tr>
</table>

The underlying software is still in its development phase, with new features being added occasionally. Hence, we strongly encourage users to send feedback on the data portal, especially comments on usability and suggestions for potential additional features. But we’re happy to hear any opinion about the new website, just send us an [email](mailto:contact@gbif.de)!