---
title:  "Funktionalitäten des neuen Virtuellen Herbariums Deutschland"
date:   2021-04-23 15:42:42 +0200
#categories: ["Einführung", "VH/de"]
lang-ref: features
background: /assets/images/filter_scientific_name.jpg
---

Das neue Portal des Virtuellen Herbariums Deutschland bietet Zugriff auf alle Belege der [teilnehmenden Herbarien](/de/partners), die bis heute digitalisiert und über das GBIF-Netzwerk veröffentlicht wurden. Mit Stand Dezember 2021 sind dies fast eine Million Belege, von denen etwa ein Drittel mit mindestens einem digitalen Bild verknüpft ist.

<figure class="has-text-centered">
	<a href="/de/data?view=MAP">
		<img src="/assets/images/map.png" />
		<figcaption>Georeferenzierte digitale Belege des Virtuellen Herbariums Deutschland</figcaption>
	</a>
</figure>

Der Link [Belege erkunden](/de/data) führt direkt zur Kartenansicht, die alle georeferenzierten Belege enthält. Alternativ kann auch die [Tabellenansicht](/de/data?view=TABLE) (mit allen Datensätzen) oder die [Galerieansicht](/de/data?view=GALLERY) (mit allen Bildern) durch Anklicken der jeweiligen Registerkarten gewählt werden. Die Tabellen- und die Galerieansicht können durch Blättern in den Datensätzen oder durch Scrollen nach unten und Klicken auf *Mehr* durchsucht werden. In der Kartenansicht hingegen können Belege näher betrachtet werden, indem mit dem Scrollrad der Maus oder den Schaltflächen +/- in der oberen linken Ecke der Karte in eine bestimmte Region gezoomt wird. Nach einer kurzen Verzögerung werden die Cluster aktualisiert - Größe und Farbe zeigen die Anzahl der Datensätze an, die den jeweiligen Cluster bilden. Durch Klicken auf einen Cluster werden die darin enthaltenen Belege aufgelistet; durch Anklicken eines Eintrags werden die Details zu diesem Beleg eingeblendet.

<figure class="has-text-centered">
	<img src="/assets/images/map_cluster_de.jpg" />
	<figcaption>Belege, die zu einem Kartencluster zusammengefasst sind</figcaption>
</figure>

In der Karte sind nur die georeferenzierten Belege und in der Galerie nur die Belege mit Bildern zu sehen. Für eine Liste aller Belege wird die Tabellenansicht benötigt. Mit den Filtern am oberen Rand können Sie der Ansicht nach Belegen suchen: Einfach auf das jeweilige Feld klicken, nach dem gefiltert werden soll, und einen oder mehrere Suchwerte eingeben. Je nach Art des Suchfeldes verhält sich der Filter unterschiedlich: Einige Filter zeigen eine Liste mit Vorschlagswerten an, die per Mausklick ausgewählt werden können (z. B. *wissenschaftlicher Name*, *Sammler* oder *Land*); andere bestehen aus einer festen Liste von Werten (z. B. *Typstatus* oder *Lizenz*). Andere wiederum zeigen nur ein Textfeld an und führen eine Volltextsuche in dem entsprechenden Feld durch, z.B. *Volltextsuche* oder *Fundort*.

<figure class="has-text-centered">
	<a href="/de/data?filter=eyJtdXN0Ijp7InRheG9uS2V5IjpbMjY4NTQ4NCwyNjg1NTE5LDI2ODU0MDAsMjY4NTQxNCwyNjg1NTUyXX19&view=TABLE">
		<img src="/assets/images/filter_scientific_name_de.jpg" />
		<figcaption>Mit dem Filter für wissenschaftliche Namen lässt sich nach mehreren Taxa gleichzeitig suchen</figcaption>
	</a>
</figure>

Es lassen sich beliebig viele Filter kombinieren, indem sie nacheinander hinzugefügt werden. Mehrere Werte für ein Suchfeld werden mit einem logischen ODER verknüpft (so kann z. B. nach mehreren Arten oder Taxongruppen gleichzeitig gesucht werden), während Filter für verschiedene Felder mit einem logischen UND verknüpft werden. Der in der nachstehenden Abbildung gezeigte Filter sucht nach allen Isotypen und Lectotypen innerhalb der Familie der *Pinaceae*.

<figure class="has-text-centered">
	<a href="/de/data?filter=eyJtdXN0Ijp7InRheG9uS2V5IjpbMzkyNV0sInR5cGVTdGF0dXMiOlsiTEVDVE9UWVBFIiwiSVNPVFlQRSJdfX0&view=TABLE">
		<img src="/assets/images/mutliple_filters_de.jpg" />
		<figcaption>Suche nach Isotypen und Lectotypen innerhalb der Familie Pinaceae</figcaption>
	</a>
</figure>

Die acht am häufigsten verwendeten Filter werden direkt über den Datensätzen angezeigt: *Volltextsuche*, *wissenschaftlicher Name*, *Typstatus*, *Sammlernummer*, *Sammler*, *Fundort*, *Land* und *Sammeljahr*. Ein Klick auf *Mehr* zeigt eine Liste aller verfügbaren Filter; einfach ein Element auswählen, um den entsprechenden Filter hinzuzufügen. Ein Klick auf die drei Punkte in dem kleinen Pop-up-Fenster verrät mehr über den Filter.

<figure class="has-text-centered">
	<img src="/assets/images/filter_list_de.jpg" />
	<figcaption>Über die Schaltfläche "Mehr" können weitere Filter ausgewählt werden</figcaption>
</figure>

Komplexe Filter lassen sich mithilfe eines Browser-Lesezeichens speichern. Beim späteren Aufruf des Lesezeichens wird der gespeicherte Filter mit den gesicherten Filterwerten geladen. Die Ergebnisliste ist jedoch immer aktuell, d.h. neue Belege, die nach dem Speichern des Lesezeichens hinzugekommen sind, werden in der Liste angezeigt. Der Menüpunkt *Taxgruppen* in der oberen Navigationsleiste verwendet solche gespeicherten Filter für die schnelle Suche nach Belegen gängiger taxonomischer Gruppen.

<figure class="has-text-centered">
	<a href="/de/data?filter=eyJtdXN0Ijp7InRheG9uS2V5IjpbNzA3MzU5MywxMDYsMzYsNzk0NzE4NCwzMzJdfX0&view=GALLERY">
		<img src="/assets/images/algae_gallery_de.jpg" />
		<figcaption>Die Schnellsuche Algen beinhaltet fünf taxonomische Gruppen</figcaption>
	</a>
</figure>

Die dem Portal unterlegte Software befindet sich noch in der Entwicklungsphase, und das Team von GBIF freut sich über Feedback - Vorschläge für nützliche Funktionalitäten, die hinzugefügt werden sollten, Ideen zur Verbesserung der Benutzerfreundlichkeit oder allgemeine Kommentare. Bitte senden Sie solche Rückmeldungen an [contact@gbif.de](mailto:contact@gbif.de).