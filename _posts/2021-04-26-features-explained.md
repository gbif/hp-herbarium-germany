---
title:  "Features of the new German Virtual Herbarium"
date:   2022-05-02 15:42:42 +0200
#categories: ["Getting started", "VH/de website"]
lang-ref: features
background: /assets/images/filter_scientific_name.jpg
---

The new portal of the German Virtual Herbarium grants access to all GBIF-mediated specimens held in the [participating herbaria](/partners) that have been digitised to date. As of May 2022, this is almost one million records; about one third have at least one digital image attached.

<figure class="has-text-centered">
	<a href="/data?view=MAP">
		<img src="/assets/images/map.png" />
		<figcaption>Geo-referenced digital specimens of the German Virtual Herbarium</figcaption>
	</a>
</figure>

The link [Browse specimens](/data) takes you right to the map view which shows all geo-referenced records. Alternatively, you can choose the [table view](/data?view=TABLE) (showing all records) or the [gallery view](/data?view=GALLERY) (showing all records with images) by clicking on the respective tabs. The table and gallery views can be browsed by paging through records or scrolling down and clicking on *Load more*. The map view, in contrast, allows you to explore specimens geographically by zooming into a region of interest using your scroll wheel or the +/- buttons in the top left corner of the map. After a short delay, clusters will refresh – with size and colour indicating the number of records forming the respective cluster. Clicking a cluster will list the specimens in a cluster; clicking on an item will slide in the details for this specimen.

<figure class="has-text-centered">
	<img src="/assets/images/map_cluster.png" />
	<figcaption>Specimens grouped together in a map cluster</figcaption>
</figure>

Remember that the map shows only geo-referenced records and the gallery only specimens with images; for a list of all specimens, you will need the table view. To find specimens of interest in this view, you can use the filters at the top: Just click on the respective field you want to filter on and enter your search value(s). Depending on the search field the filter will behave differently: some filters will show a list of suggested values that you can click on to select (such as *Scientific name*, *Recorded by* or *Country*); others will give you a list of items to tick (like *Type status* or *License*). Some filters will present nothing but a text box and will perform a full text search on the respective field, e.g. *Text search* or *Locality*. 

<figure class="has-text-centered">
	<a href="/data?filter=eyJtdXN0Ijp7InRheG9uS2V5IjpbMjY4NTQ4NCwyNjg1NTE5LDI2ODU0MDAsMjY4NTQxNCwyNjg1NTUyXX19&view=TABLE">
		<img src="/assets/images/filter_scientific_name.jpg" />
		<figcaption>The filter on scientific name allows you to tick several taxa to be included in the search</figcaption>
	</a>
</figure>

You can combine as many filters as you like by adding them consecutively. Several values for one field will be combined by a logical OR (allowing you to search for several species or taxon groups at the same time, for example), whereas filters on different fields will be combined using a logical AND. The filter shown in the screenshot below will find all isotypes and lectotypes in the *Pinaceae* family.

<figure class="has-text-centered">
	<a href="/data?filter=eyJtdXN0Ijp7InRheG9uS2V5IjpbMzkyNV0sInR5cGVTdGF0dXMiOlsiTEVDVE9UWVBFIiwiSVNPVFlQRSJdfX0&view=TABLE">
		<img src="/assets/images/mutliple_filters.jpg" />
		<figcaption>Searching for isotypes and lectotypes in the Pinaceae family</figcaption>
	</a>
</figure>

The eight filters listed directly above the records are the most commonly used filters: *Text search*, *Scientific name*, *Type status*, *Record number*, *Recorded by*, *Locality*, *Country* and *Year*. Clicking on *more* will show a list of all filters available; just choose an item to add the respective filter. Clicking the three dots in the small pop-up window will tell you more about the filter.

<figure class="has-text-centered">
	<img src="/assets/images/filter_list.jpg" />
	<figcaption>Clicking on the "more" button allows you to choose additional filters</figcaption>
</figure>

You can save complex filters by simply adding a browser bookmark. Using the bookmark later will load the stored filter with the saved filter values. The results, however, will always be up-to-date, meaning that new specimens added after the bookmark was saved will show up in the list. The menu item *Organism groups* in the navigation bar at the top uses such saved filters and can be used as a shortcut to find specimens of common taxonomic groups.

<figure class="has-text-centered">
	<a href="/data?filter=eyJtdXN0Ijp7InRheG9uS2V5IjpbNzA3MzU5MywxMDYsMzYsNzk0NzE4NCwzMzJdfX0&view=GALLERY">
		<img src="/assets/images/algae_gallery.jpg" />
		<figcaption>The "Algae" shortcut includes five taxonomic groups</figcaption>
	</a>
</figure>

The underlying software for this portal is still in the development phase, and the team at GBIF is happy to receive feedback - suggestions for useful features that should be added, ideas for improving the usability or general comments. Please direct any of this to [contact@gbif.de](mailto:contact@gbif.de) .
