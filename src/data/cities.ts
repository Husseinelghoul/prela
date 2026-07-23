// Regional landing pages for local SEO ("Autoankauf <Region>").
// IMPORTANT: every city carries genuinely unique copy — never templated
// sentences with a swapped name, or Google treats them as doorway pages.
// Copy authored per region by hand.

export interface City {
    slug: string;
    name: string;
    regionPhrase: string;
    title: string;
    description: string;
    h1: string;
    lead: string;
    intro: string[];
    highlightTitle: string;
    highlightText: string;
    usps: { icon: string; title: string; text: string }[];
    strassenverkehrsamt: string;
    areas: string[];
    nearbySlugs: string[];
}

export const CITIES: City[] = [
    {
        "slug": "luzern",
        "name": "Luzern",
        "regionPhrase": "im Kanton Luzern",
        "title": "Autoankauf Luzern – Auto verkaufen zum Bestpreis",
        "description": "Autoankauf Luzern von Prela Automobile AG: Hauptsitz in Sursee, oft gleicher Tag vor Ort. Faire Bewertung, Barzahlung, Abholung und Abmeldung inklusive.",
        "h1": "Autoankauf Luzern",
        "lead": "Als Luzerner Betrieb mit Hauptsitz in Sursee stehen wir zwischen Vierwaldstättersee und Napfgebiet oft schon am selben Tag bei Ihnen in der Einfahrt.",
        "intro": [
            "Wenn Sie Ihr Auto verkaufen in Luzern, sind Sie bei uns am kürzesten Weg: Unser Hauptsitz an der Allmendstrasse 10 in Sursee liegt mitten im Kanton, gut zehn Autobahnminuten von Emmen und der Stadt Luzern entfernt. Ein Anruf oder eine WhatsApp-Nachricht auf +41 79 308 80 00 genügt, und wir vereinbaren einen Termin – oft noch am selben Tag, gern auch am Abend oder am Samstag, wenn es Ihr Arbeitsalltag zwischen Kriens und Ebikon verlangt.",
            "Die Fahrzeuglandschaft rund um den Pilatus ist so vielfältig wie die Region selbst: der solide Familienkombi aus einem Horwer Einfamilienhausquartier, der geleaste Firmenwagen aus dem Gewerbegebiet Emmen-Süd, das ältere Occasion-Auto einer Pendlerin aus dem Seetal oder der Geländewagen eines Landwirts aus dem Willisauer Hinterland. Genau diese Mischung kennen wir seit über 25 Jahren aus dem Effeff und bewerten jeden dieser Wagen mit einem Auge für den lokalen Markt.",
            "Beim Autoankauf Luzern spielt der Zustand keine Rolle, die uns überrascht. Winterschäden von der vereisten Passstrasse Richtung Entlebuch, ein Marderbiss aus der Tiefgarage in der Neustadt, ein Motorschaden nach vielen Kilometern auf der A2 oder ein Unfallwagen ohne gültige MFK – wir kaufen an, was andere Händler abwinken. Die kostenlose Fahrzeugbewertung erhalten Sie innert 24 Stunden, transparent und ohne versteckte Abzüge.",
            "Ist man sich einig, geht alles Hand in Hand: Wir holen den Wagen kostenlos ab, ob in Hochdorf, in Sursee oder direkt vor Ihrer Wohnung in der Stadt Luzern. Die Bezahlung erfolgt sofort, bar oder per Banküberweisung, noch bevor wir wegfahren. Die Abmeldung beim Strassenverkehrsamt des Kantons Luzern übernehmen wir für Sie – Sie geben lediglich Schlüssel und Papiere ab und haben die Sache aus dem Kopf."
        ],
        "highlightTitle": "Ihr <span>Heimmarkt</span> – wir sind gleich um die Ecke",
        "highlightText": "Luzern ist für Prela Automobile AG kein Gebiet auf der Landkarte, sondern unser Zuhause. Von Sursee aus erreichen wir das Rontal, das Seetal, das Wiggertal und die Agglomeration Luzern in kürzester Zeit, kennen die Öffnungszeiten und Abläufe des Strassenverkehrsamts an der Arsenalstrasse in Kriens und wissen, welche Occasion in dieser Gegend wirklich gefragt ist. Diese Nähe bedeutet für Sie schnellere Termine, kürzere Wartezeiten und einen Ansprechpartner, der die Region nicht aus dem Navi, sondern aus dem Alltag kennt.",
        "usps": [
            {
                "icon": "fa-clock",
                "title": "Termin oft am selben Tag",
                "text": "Von Sursee aus sind wir schnell in Emmen, Kriens oder der Stadt Luzern – auch abends und samstags, wenn es Ihnen passt."
            },
            {
                "icon": "fa-location-dot",
                "title": "Zuhause im Kanton Luzern",
                "text": "Hauptsitz an der Allmendstrasse 10 in Sursee: kurze Wege ins Seetal, Wiggertal und Rontal statt anonymer Fernbewertung."
            },
            {
                "icon": "fa-file-contract",
                "title": "Abmeldung inklusive",
                "text": "Die Abmeldung beim Strassenverkehrsamt des Kantons Luzern erledigen wir – samt Barzahlung oder Überweisung vor Ort."
            }
        ],
        "strassenverkehrsamt": "Strassenverkehrsamt des Kantons Luzern",
        "areas": [
            "Stadt Luzern",
            "Emmen",
            "Kriens",
            "Horw",
            "Sursee",
            "Willisau",
            "Hochdorf",
            "Ebikon"
        ],
        "nearbySlugs": [
            "sursee",
            "zug",
            "aargau"
        ]
    },
    {
        "slug": "sursee",
        "name": "Sursee",
        "regionPhrase": "in Sursee und Umgebung",
        "title": "Autoankauf Sursee – vor Ort am Sempachersee",
        "description": "Prela Automobile AG kauft Ihr Auto direkt in Sursee – hier steht unser Hauptsitz an der Allmendstrasse. Kurze Wege, faire Bewertung in 24 Stunden, Barzahlung.",
        "h1": "Autoankauf Sursee",
        "lead": "Ihr Autohändler direkt vor der Haustür – mitten in Sursee, nicht irgendwo im Internet",
        "intro": [
            "Prela Automobile AG ist keine anonyme Online-Plattform, die Ihr Fahrzeug aus der Ferne schätzt: Unser Hauptsitz steht an der Allmendstrasse 10 mitten in Sursee. Wenn Sie in der Altstadt am Rathaus vorbeigehen oder auf dem Weg zum Bahnhof sind, liegt unser Standort quasi um die Ecke. Beim Autoankauf Sursee bedeutet das die kürzesten Wege der ganzen Zentralschweiz.",
            "Seit über 25 Jahren kennen wir den Fahrzeugmarkt rund um den Sempachersee wie unsere Westentasche. Ob Familienauto aus einem Reiheneinfamilienhaus in Schenkon, Pendlerfahrzeug vom Bahnhof Sursee Richtung Luzern oder das Zweitauto einer Landwirtsfamilie im Surental – wir wissen, welche Modelle hier gefahren werden und was sie tatsächlich wert sind. Diese Ortskenntnis fliesst direkt in eine faire Bewertung ein.",
            "Wer sein Auto verkaufen in Sursee möchte, muss bei uns nicht auf einen Rückruf aus einem fernen Callcenter warten. Sie erreichen uns direkt unter +41 79 308 80 00 – telefonisch oder per WhatsApp – und dürfen bei Bedarf gerne persönlich an der Allmendstrasse vorbeikommen. Ein Handschlag vor Ort ersetzt für viele Surseerinnen und Surseer jede Versprechung im Netz.",
            "Von Sursee aus sind Sempach, Oberkirch, Nottwil, Wauwil und Ruswil in wenigen Minuten erreicht – und genau dort holen wir Ihr Fahrzeug auch kostenlos ab. Egal ob fahrbereit oder mit Motorschaden nach der letzten Fahrt über den Sonnenberg: Wir kommen zu Ihnen, erledigen die Abmeldung beim Strassenverkehrsamt des Kantons Luzern und bezahlen sofort bar oder per Banküberweisung."
        ],
        "highlightTitle": "Der lokale Autohändler <span>am Sempachersee</span>",
        "highlightText": "Zwischen Sursee, dem Sempachersee und dem Surental sind wir keine Zwischenhändler mit Postfachadresse, sondern ein Betrieb mit echtem Gesicht und festem Standort in der Region. Kunden aus Schenkon, Oberkirch oder Nottwil schätzen, dass sie bei Fragen einfach vorbeifahren können statt ein Formular auszufüllen. Diese Nähe macht den Autoverkauf Sursee unkompliziert, transparent und schnell – und genau das erwartet man von einem Händler aus dem eigenen Dorf.",
        "usps": [
            {
                "icon": "fa-location-dot",
                "title": "Hauptsitz in Sursee",
                "text": "Unser Büro an der Allmendstrasse 10 liegt mitten in der Stadt. Kürzeste Anfahrt, persönlicher Kontakt und ein Ansprechpartner, den Sie treffen können."
            },
            {
                "icon": "fa-clock",
                "title": "Bewertung in 24 Stunden",
                "text": "Sie senden uns die Eckdaten Ihres Fahrzeugs, wir melden uns innert eines Tages mit einem konkreten und kostenlosen Preisangebot zurück."
            },
            {
                "icon": "fa-file-contract",
                "title": "Abmeldung inklusive",
                "text": "Die Abmeldung beim Strassenverkehrsamt des Kantons Luzern übernehmen wir für Sie – ebenso die Barzahlung oder Überweisung direkt bei der Abholung."
            }
        ],
        "strassenverkehrsamt": "Strassenverkehrsamt des Kantons Luzern",
        "areas": [
            "Sursee",
            "Sempach",
            "Oberkirch",
            "Nottwil",
            "Schenkon",
            "Triengen",
            "Wauwil",
            "Ruswil"
        ],
        "nearbySlugs": [
            "luzern",
            "zentralschweiz",
            "aargau"
        ]
    },
    {
        "slug": "zug",
        "name": "Zug",
        "regionPhrase": "im Kanton Zug",
        "title": "Autoankauf Zug – Premium & diskret",
        "description": "Autoankauf Zug: Wir kaufen gepflegte Occasionen, Firmenwagen und Flotten diskret an. Kostenlose Bewertung in 24h, Barzahlung, Abholung in Baar, Cham & Rotkreuz.",
        "h1": "Autoankauf Zug",
        "lead": "Premium-Autoankauf im Kanton Zug – diskret, schnell und zu Preisen, die zu Ihrem Fahrzeug passen",
        "intro": [
            "Der Kanton Zug steht für gepflegte Fahrzeuge, hochwertige Occasionen und einen Fahrzeugpark, der weit über dem Schweizer Durchschnitt liegt. Genau darauf ist Prela Automobile AG spezialisiert: Wenn Sie in Zug ein Auto verkaufen möchten, erhalten Sie von uns eine faire Marktbewertung, die dem tatsächlichen Wert Ihres Wagens gerecht wird – ob Limousine aus Baar, SUV aus Cham oder Sportwagen aus Unterägeri.",
            "Als Wirtschafts- und Firmenstandort bringt Zug eine Besonderheit mit sich: Viele Fahrzeuge sind Geschäftswagen, Leasingrückläufer oder Teil eines Fuhrparks. Für den Autoankauf Zug bedeutet das diskrete Abwicklung ohne öffentliches Inserat, klare Konditionen und Ansprechpartner, die den geschäftlichen Kontext verstehen. Ihre Firmendaten und Vertragsdetails bleiben selbstverständlich vertraulich.",
            "Unser Hauptsitz an der Allmendstrasse 10 in Sursee liegt nur wenige Autominuten von Rotkreuz und Hünenberg entfernt. Diese Nähe erlaubt uns sehr kurzfristige Termine im ganzen Kanton Zug – oft schon am selben oder nächsten Tag. Wir kommen zu Ihnen nach Steinhausen, Menzingen oder in die Stadt Zug, begutachten das Fahrzeug vor Ort und wickeln alles in einem einzigen Besuch ab.",
            "Seit über 25 Jahren kaufen, verkaufen und exportieren wir Fahrzeuge aller Marken und in jedem Zustand. Beim Auto verkaufen in Zug profitieren Sie von einer kostenlosen Bewertung innert 24 Stunden, kostenloser Abholung, sofortiger Bezahlung in bar oder per Banküberweisung sowie der kompletten Abmeldung beim Strassenverkehrsamt – ohne dass Sie sich um Papierkram oder Verhandlungen kümmern müssen."
        ],
        "highlightTitle": "Ihr Spezialist für <span>Firmenwagen, Leasingrückläufer und ganze Flotten</span> in Zug",
        "highlightText": "Der tiefe Steuersatz und die hohe Dichte an Unternehmen machen Zug zum idealen Standort für hochwertige Geschäftsfahrzeuge – und genau hier liegt unsere Stärke. Wir übernehmen einzelne Firmenwagen ebenso wie komplette Fuhrparks, kaufen Leasingrückläufer und Flottenfahrzeuge zu Konditionen, die Ihrer Buchhaltung standhalten. Für Unternehmen in Baar, Cham, Rotkreuz und der Stadt Zug bedeutet das: eine professionelle Abwicklung mit Rechnung, transparenter Bewertung und absoluter Diskretion. Ob Sie eine einzelne Premium-Occasion oder zehn Fahrzeuge auf einmal abgeben – wir bündeln Begutachtung, Bezahlung und Abmeldung in einem reibungslosen Ablauf, der Ihren Betrieb keine Zeit kostet.",
        "usps": [
            {
                "icon": "fa-lock",
                "title": "Diskrete Geschäftsabwicklung",
                "text": "Für Firmenkunden im Kanton Zug wickeln wir jeden Ankauf vertraulich ab – ohne öffentliches Inserat, mit Rechnung und klarer Dokumentation für Ihre Buchhaltung."
            },
            {
                "icon": "fa-clock",
                "title": "Termine oft am selben Tag",
                "text": "Von Sursee sind Rotkreuz, Baar und die Stadt Zug in wenigen Minuten erreichbar – deshalb bieten wir im Kanton Zug besonders kurzfristige Vor-Ort-Termine."
            },
            {
                "icon": "fa-chart-line",
                "title": "Faire Preise für Premiumfahrzeuge",
                "text": "Gepflegte Occasionen, Geschäftswagen und Flotten aus Zug bewerten wir marktgerecht – hoher Fahrzeugwert wird bei uns auch als solcher vergütet."
            }
        ],
        "strassenverkehrsamt": "Strassenverkehrsamt des Kantons Zug",
        "areas": [
            "Stadt Zug",
            "Baar",
            "Cham",
            "Steinhausen",
            "Rotkreuz",
            "Hünenberg",
            "Unterägeri",
            "Menzingen"
        ],
        "nearbySlugs": [
            "luzern",
            "schwyz",
            "zuerich"
        ]
    },
    {
        "slug": "aargau",
        "name": "Aargau",
        "regionPhrase": "im Kanton Aargau",
        "title": "Autoankauf Aargau – Bewertung in 24 Std.",
        "description": "Autoankauf Aargau zu Bestpreisen: Prela kauft Ihr Auto in Aarau, Baden, Brugg oder Wohlen – auch mit hohem Kilometerstand. Gratis-Bewertung in 24 Std.",
        "h1": "Autoankauf Aargau",
        "lead": "Ihr Auto im Kanton Aargau verkaufen – schnell, fair und ohne Umwege über den Occasionsmarkt",
        "intro": [
            "Der Kanton Aargau gehört zu den lebhaftesten Occasionsmärkten der Schweiz, und genau das spielt Ihnen beim Verkauf in die Hände. Wer sein Auto in Aarau, Baden oder Brugg anbietet, konkurriert mit einem riesigen Angebot – bei Prela verkaufen Sie stattdessen direkt an einen erfahrenen Ankäufer, ohne Inserate, Besichtigungstermine und Preisverhandlungen mit Privatkäufern.",
            "Weil der Aargau von den Verkehrsachsen A1 und A3 durchzogen wird, sehen wir hier überdurchschnittlich viele Pendler- und Geschäftsfahrzeuge mit hoher Laufleistung. Solche Autos sind für viele lokale Garagen unattraktiv – für unseren Export sind sie hochbegehrt. Deshalb erhalten Sie bei uns auch für Vielfahrer-Modelle und Dieselfahrzeuge ein Angebot, das dem tatsächlichen Wert entspricht.",
            "Dank der kurzen Distanz zwischen unserem Hauptsitz in Sursee und dem Aargauer Mittelland vereinbaren wir Termine oft schon innert 24 Stunden. Ob Sie in Wettingen, Zofingen, Lenzburg oder Rheinfelden wohnen: Wir kommen zu Ihnen, begutachten das Fahrzeug vor Ort und Sie müssen dafür keinen einzigen Kilometer fahren.",
            "Prela Automobile ist seit über 25 Jahren im Autoankauf, -verkauf und -export tätig. Wir kaufen sämtliche Marken in jedem Zustand – vom gepflegten Kombi bis zum Unfall- oder Motorschaden-Fahrzeug. Die kostenlose Bewertung, die Abholung, die Abmeldung beim Strassenverkehrsamt Aargau sowie die sofortige Bezahlung bar oder per Banküberweisung sind bei uns selbstverständlich inbegriffen."
        ],
        "highlightTitle": "Warum der <span>Aargauer Verkehrskorridor</span> Ihren Autoankauf beschleunigt",
        "highlightText": "Kaum ein anderer Kanton bewegt so viel Blech wie der Aargau: Als Drehscheibe zwischen Zürich, Basel und Bern wechseln hier Tag für Tag unzählige Occasionen den Besitzer. Für Sie bedeutet dieses Volumen einerseits harte Konkurrenz beim Privatverkauf – andererseits eine starke, konstante Nachfrage, die wir direkt bedienen. Gerade die entlang der A1 und A3 typischen Fahrzeuge mit hohen Kilometerständen fliessen über unsere Exportkanäle zügig weiter, sodass wir Ihnen einen zügigen, marktgerechten Ankauf bieten können – ganz ohne das lange Warten, das der überfüllte Aargauer Occasionsmarkt sonst mit sich bringt.",
        "usps": [
            {
                "icon": "fa-chart-line",
                "title": "Starke Nachfrage für Vielfahrer",
                "text": "Pendler- und Geschäftsautos mit hoher Laufleistung entlang der A1/A3 sind für unseren Export gefragt – dafür zahlen wir im Aargau faire Preise."
            },
            {
                "icon": "fa-clock",
                "title": "Termin oft innert 24 Stunden",
                "text": "Die Nähe von Sursee zum Aargauer Mittelland erlaubt kurze Wege: In Aarau, Baden oder Wohlen sind wir meist schon am nächsten Tag bei Ihnen."
            },
            {
                "icon": "fa-file-contract",
                "title": "Abmeldung inklusive",
                "text": "Wir erledigen die Abmeldung beim Strassenverkehrsamt Aargau für Sie und bezahlen sofort bar oder per Banküberweisung – ohne versteckte Kosten."
            }
        ],
        "strassenverkehrsamt": "Strassenverkehrsamt Aargau",
        "areas": [
            "Aarau",
            "Baden",
            "Wettingen",
            "Brugg",
            "Wohlen",
            "Zofingen",
            "Rheinfelden",
            "Lenzburg"
        ],
        "nearbySlugs": [
            "luzern",
            "zuerich",
            "basel"
        ]
    },
    {
        "slug": "zuerich",
        "name": "Zürich",
        "regionPhrase": "in der Region Zürich",
        "title": "Autoankauf Zürich – Auto verkaufen zum Bestpreis",
        "description": "Autoankauf Zürich: Wir kaufen Ihr Auto in Stadt und Kanton Zürich, von der Goldküste bis ins Limmattal. Gratis Bewertung in 24 Std., Barzahlung, Abholung frei.",
        "h1": "Autoankauf Zürich",
        "lead": "Auto verkaufen in Zürich – im grössten Occasionsmarkt der Schweiz zum fairsten Tagespreis",
        "intro": [
            "Wer sein Auto verkaufen möchte in Zürich, sitzt im Herzen des grössten Fahrzeugmarktes der Schweiz. Kein anderer Kanton bewegt so viele Occasionen pro Tag – von der Limousine an der Goldküste über den Familienkombi in Uster bis zum vielgefahrenen Transporter aus dem Limmattal. Für Sie bedeutet das: höhere Nachfrage, schnellere Abwicklung und ein Preis, der die reale Marktlage von Zürich widerspiegelt.",
            "Prela Automobile AG ist von Sursee aus regelmässig im Kanton Zürich unterwegs. Weil zwischen Winterthur, Dietikon und dem Zürcher Oberland ständig Termine anstehen, sind wir oft schon am selben oder nächsten Tag bei Ihnen vor Ort – ohne dass Sie im Feierabendverkehr auf der A1 stehen müssen. Sie nennen uns Marke, Kilometerstand und Zustand, wir bringen die Bewertung mit.",
            "Unsere über 25 Jahre Erfahrung im Autoankauf, Autoverkauf und Autoexport zahlen sich gerade in Zürich aus: Für praktisch jedes Fahrzeug haben wir über unser Netzwerk den passenden Abnehmer – im Inland genauso wie im Export. Ob gepflegter Premiumwagen aus Küsnacht oder Diesel-Van mit hohem Kilometerstand aus Schlieren, jeder Zustand und jede Marke ist bei uns willkommen.",
            "Der Ablauf bleibt für Sie unkompliziert: kostenlose Bewertung innert 24 Stunden, sofortige Bezahlung in bar oder per Banküberweisung und eine Gratis-Abholung in der ganzen Region Zürich. Die Abmeldung beim Strassenverkehrsamt des Kantons Zürich übernehmen wir – Sie geben nur die Schlüssel ab und wir kümmern uns um den Rest."
        ],
        "highlightTitle": "Zürich – der <span>liquideste Automarkt</span> der Schweiz",
        "highlightText": "Nirgendwo wechseln so viele Fahrzeuge den Besitzer wie in Stadt und Kanton Zürich. Diese schiere Marktgrösse ist Ihr Vorteil: Wo täglich gekauft und verkauft wird, entstehen kurze Standzeiten und faire Tagespreise. Über unser breites Käufernetzwerk finden wir für jedes Segment Abnehmer – vom exklusiven Sportwagen bis zum robusten Nutzfahrzeug. Diese hohe Liquidität erlaubt es uns, Ihnen für Ihr Auto in Zürich ein Angebot zu machen, das schneller und oft attraktiver ausfällt als in kleineren Regionen der Schweiz.",
        "usps": [
            {
                "icon": "fa-chart-line",
                "title": "Grösster Markt, bester Preis",
                "text": "Im nachfragestärksten Occasionsmarkt der Schweiz erzielen wir für Ihr Fahrzeug in Zürich einen Preis, der die hohe Liquidität der Region direkt widerspiegelt."
            },
            {
                "icon": "fa-calendar-check",
                "title": "Termine oft am selben Tag",
                "text": "Weil wir zwischen Winterthur, Uster und dem Limmattal ständig unterwegs sind, kommen wir kurzfristig zu Ihnen – ganz ohne Umweg über Sursee für Sie."
            },
            {
                "icon": "fa-file-contract",
                "title": "Abmeldung Zürich inklusive",
                "text": "Die Abmeldung beim Strassenverkehrsamt des Kantons Zürich erledigen wir für Sie, inklusive Barzahlung oder Überweisung und kostenloser Abholung vor Ort."
            }
        ],
        "strassenverkehrsamt": "Strassenverkehrsamt des Kantons Zürich",
        "areas": [
            "Stadt Zürich",
            "Winterthur",
            "Uster",
            "Dübendorf",
            "Dietikon",
            "Limmattal",
            "Zürcher Oberland",
            "Horgen"
        ],
        "nearbySlugs": [
            "zug",
            "aargau",
            "schwyz"
        ]
    },
    {
        "slug": "bern",
        "name": "Bern",
        "regionPhrase": "im Kanton Bern",
        "title": "Autoankauf Bern – Faire Preise im ganzen Kanton",
        "description": "Autoankauf im Kanton Bern: Vom Berner Oberland bis ins Seeland holen wir Ihr Auto gratis ab, zahlen sofort und melden ab. Bewertung innert 24 Stunden.",
        "h1": "Autoankauf Bern",
        "lead": "Ihr Auto verkaufen im Kanton Bern – von Thun bis Biel/Bienne zum Bestpreis",
        "intro": [
            "Der Kanton Bern erstreckt sich vom hochalpinen Berner Oberland über das Mittelland bis ins wasserreiche Seeland – und genau diese Weite prägt unseren Autoankauf. Ob Sie in der Stadt Bern, in einem Emmentaler Dorf oder in einer Berggemeinde oberhalb von Thun wohnen: Prela Automobile AG bewertet Ihr Fahrzeug fair und holt es kostenlos bei Ihnen zu Hause ab.",
            "Seit über 25 Jahren kaufen wir im ganzen Kanton Fahrzeuge jeder Marke und jedes Zustands – vom gepflegten Kombi aus Köniz über den Geländewagen aus dem Simmental bis zum Nutzfahrzeug eines Landwirtschaftsbetriebs im Oberaargau. Gerade Allrad-Fahrzeuge, wie sie in den bernischen Berg- und Landregionen verbreitet sind, erzielen bei uns erfahrungsgemäss starke Preise.",
            "Der Ablauf ist so unkompliziert wie möglich: Sie schildern uns Ihr Auto per Telefon oder WhatsApp unter +41 79 308 80 00, wir erstellen innert 24 Stunden eine kostenlose Bewertung, und bei Einigung vereinbaren wir einen Abholtermin – egal ob in Burgdorf, Langenthal oder im hintersten Haslital. Die Bezahlung erfolgt sofort, bar oder per Banküberweisung.",
            "Auch im zweisprachigen Raum um Biel/Bienne sind wir für Sie da und begleiten Sie auf Deutsch und Französisch durch den Verkauf. Die Abmeldung beim Strassenverkehrs- und Schifffahrtsamt des Kantons Bern übernehmen wir für Sie – Sie müssen sich um nichts kümmern, wenn Sie Ihr Auto verkaufen in Bern."
        ],
        "highlightTitle": "Ein grosser Kanton – <span>kostenlose Abholung wirklich überall</span>",
        "highlightText": "Der Kanton Bern ist einer der grössten und ländlichsten der Schweiz, und viele Verkäufer wohnen weit weg von einer Autobahn oder einem Zentrum. Für uns spielt das keine Rolle: Wir holen Ihr Fahrzeug gratis ab – im Talkessel von Thun, im abgelegenen Diemtigtal, in den Weilern des Emmentals oder mitten in der Stadt Bern. Weil in diesen Regionen robuste Allrad-Fahrzeuge, geräumige Kombis und praktische Nutzfahrzeuge gefragt sind, zahlen wir gerade dafür überdurchschnittliche Preise. So wird der Autoankauf Bern auch dann bequem und lohnend, wenn Sie fernab der grossen Achsen zu Hause sind.",
        "usps": [
            {
                "icon": "fa-location-dot",
                "title": "Gratis-Abholung im ganzen Kanton",
                "text": "Vom Berner Oberland bis ins Seeland holen wir Ihr Auto kostenlos ab – auch in abgelegenen Berg- und Landgemeinden zwischen Thun, Langenthal und Biel/Bienne."
            },
            {
                "icon": "fa-chart-line",
                "title": "Top-Preise für Allrad und Kombis",
                "text": "Geländewagen, 4x4-Modelle und Kombis aus den ländlichen Berner Regionen sind stark gefragt – dafür erhalten Sie bei uns einen fairen, marktgerechten Bestpreis."
            },
            {
                "icon": "fa-file-contract",
                "title": "Abmeldung inklusive",
                "text": "Die Abmeldung beim Strassenverkehrs- und Schifffahrtsamt des Kantons Bern erledigen wir für Sie – inklusive sofortiger Bezahlung bar oder per Banküberweisung."
            }
        ],
        "strassenverkehrsamt": "Strassenverkehrs- und Schifffahrtsamt des Kantons Bern",
        "areas": [
            "Stadt Bern",
            "Thun",
            "Biel/Bienne",
            "Köniz",
            "Burgdorf",
            "Langenthal",
            "Emmental",
            "Berner Oberland"
        ],
        "nearbySlugs": [
            "luzern",
            "basel",
            "aargau"
        ]
    },
    {
        "slug": "basel",
        "name": "Basel",
        "regionPhrase": "in Basel-Stadt und Baselland",
        "title": "Autoankauf Basel – Fairer Export ans Dreiländereck",
        "description": "Autoankauf Basel am Dreiländereck: Wir exportieren Ihr Auto zu Bestpreisen, auch Diesel. Gratis Bewertung in 24 Std, Abholung und Barzahlung in beiden Basel.",
        "h1": "Autoankauf Basel",
        "lead": "Auto verkaufen in Basel – wo die Grenze zum Vorteil wird",
        "intro": [
            "Kaum eine Region der Schweiz liegt so nah am Ausland wie Basel: Das Dreiländereck zwischen Kleinbasel, Weil am Rhein und Saint-Louis macht die Stadt zum natürlichen Tor für den Autoexport. Wer sein Fahrzeug hier verkauft, profitiert von Käufern, die gleich hinter der Grenze warten – und genau das schlägt sich im Preis nieder.",
            "Prela Automobile AG kauft in ganz Basel-Stadt und Baselland an: vom Reihenhaus in Riehen über die Wohnblöcke von Pratteln bis zum Einfamilienhaus in Reinach BL. Sie melden sich, wir bewerten Ihr Auto innert 24 Stunden kostenlos – ohne dass Sie den Grenzverkehr auf der Autobahn A2 oder die Parkplatzsuche in der Innenstadt auf sich nehmen müssen.",
            "Ob laufstarker Kombi mit Baselbieter Kilometern, Diesel aus dem Pendlerverkehr nach Deutschland oder ein Occasion, das auf dem hiesigen Markt schwer zu vermitteln ist – wir kaufen jede Marke in jedem Zustand. Die Abholung bei Ihnen zu Hause in Allschwil, Binningen oder Muttenz ist selbstverständlich gratis.",
            "Nach 25 Jahren im Geschäft kennen wir den Unterschied zwischen einem Basler Stadtwagen und einem Fahrzeug aus dem Leimental. Sie erhalten sofort Ihr Geld – bar oder per Banküberweisung – und wir übernehmen die Abmeldung bei der Motorfahrzeugkontrolle beider Basel gleich mit."
        ],
        "highlightTitle": "Der <span>Grenzvorteil</span> von Basel für Ihren Verkauf",
        "highlightText": "Basel ist keine gewöhnliche Verkaufsregion – die Stadt liegt direkt am Dreiländereck, und das verändert die Rechnung zu Ihren Gunsten. Über unser internationales Exportnetzwerk finden Fahrzeuge, die in der Schweiz nur zäh Käufer finden, im nahen Ausland rasch neue Besitzer. Gerade Diesel und Occasionen mit hohem Kilometerstand erzielen dadurch in Basel oft deutlich bessere Preise als im Landesinnern. Was für einen Verkäufer in Luzern ein Ladenhüter wäre, ist für uns hier ein gefragtes Exportfahrzeug – und diesen Mehrwert geben wir Ihnen weiter.",
        "usps": [
            {
                "icon": "fa-location-dot",
                "title": "Direkt am Dreiländereck",
                "text": "Kurze Wege nach Deutschland und Frankreich bedeuten für Ihr Auto einen grösseren Käuferkreis – und damit einen besseren Preis, als ihn der reine Schweizer Markt hergibt."
            },
            {
                "icon": "fa-chart-line",
                "title": "Bestpreis auch für Diesel",
                "text": "Hochwertige Diesel und kilometerstarke Occasionen aus dem Basler Pendlerverkehr sind über unser Exportnetz besonders gefragt und werden entsprechend höher bewertet."
            },
            {
                "icon": "fa-file-contract",
                "title": "Abmeldung inklusive",
                "text": "Die Abmeldung bei der Motorfahrzeugkontrolle beider Basel erledigen wir für Sie – Sie unterschreiben, wir kümmern uns um den Rest und die sofortige Bezahlung."
            }
        ],
        "strassenverkehrsamt": "Motorfahrzeugkontrolle beider Basel",
        "areas": [
            "Basel-Stadt",
            "Riehen",
            "Allschwil",
            "Liestal",
            "Muttenz",
            "Pratteln",
            "Binningen",
            "Reinach BL"
        ],
        "nearbySlugs": [
            "aargau",
            "zuerich",
            "bern"
        ]
    },
    {
        "slug": "schwyz",
        "name": "Schwyz",
        "regionPhrase": "im Kanton Schwyz",
        "title": "Autoankauf Schwyz – Bewertung in 24 Stunden",
        "description": "Auto verkaufen im Kanton Schwyz: von Pfäffikon bis Einsiedeln zahlt Prela faire Bestpreise. Kostenlose Bewertung innert 24 Stunden, Abholung, Barzahlung.",
        "h1": "Autoankauf Schwyz",
        "lead": "Ihr Fahrzeug zwischen Mythen und oberem Zürichsee zum Bestpreis verkaufen",
        "intro": [
            "Wer im Kanton Schwyz sein Auto verkaufen möchte, profitiert von unserer unmittelbaren Nähe: Von unserem Sitz in Sursee sind wir in kürzester Zeit in Küssnacht, Brunnen oder Arth-Goldau vor Ort. Kurzfristige Termine, auch abends oder am Wochenende, sind für uns entlang der Achse Zug-Schwyz selbstverständlich.",
            "Die alpine und seenahe Lage des Kantons prägt den Fahrzeugbestand: Zwischen Rigi und Hoch-Ybrig sind Allrad-Fahrzeuge, geräumige Kombis und robuste Pickups weit verbreitet. Genau diese Modelle erzielen im Export starke Preise, weshalb wir Schwyzer Verkäuferinnen und Verkäufern für Allradler oft besonders attraktive Angebote unterbreiten können.",
            "Im wohlhabenden Bezirk Höfe und in March entlang des oberen Zürichsees kaufen wir regelmässig Premium- und Oberklassewagen an. Ob gepflegter SUV aus Wollerau, Limousine aus Freienbach oder Sportwagen aus Pfäffikon SZ: Wir bewerten jedes Fahrzeug marktgerecht und mit dem Blick eines Betriebs mit über 25 Jahren Erfahrung.",
            "Der Ablauf bleibt für Sie unkompliziert und kostenlos: Sie schildern uns Ihr Fahrzeug, erhalten innert 24 Stunden eine verbindliche Bewertung, und bei einer Einigung holen wir den Wagen in Schwyz ab. Die Bezahlung erfolgt sofort bar oder per Banküberweisung, die Abmeldung beim Verkehrsamt des Kantons Schwyz übernehmen wir für Sie."
        ],
        "highlightTitle": "Kurze Wege, starke Preise für <span>Allrad und Premium</span>",
        "highlightText": "Der Kanton Schwyz liegt gleich neben unserer Basis in Sursee, weshalb wir kurzfristig und ohne lange Anfahrt bei Ihnen sind, sei es in Einsiedeln, am Mythen oder an der Seepromenade in Pfäffikon. Für die im Kanton typischen Allrad-Kombis und Pickups aus den Berggemeinden sowie für die exklusiven Fahrzeuge aus dem Höfe- und March-Gebiet zahlen wir dank starker Exportnachfrage überdurchschnittliche Preise. So verbinden wir persönliche Nähe mit einem Ankauf, der Ihrem Schwyzer Fahrzeug wirklich gerecht wird.",
        "usps": [
            {
                "icon": "fa-location-dot",
                "title": "Direkt nebenan",
                "text": "Von Sursee sind wir in Minuten in Küssnacht, Brunnen oder Pfäffikon SZ. Kurzfristige Termine unter der Woche, abends und am Wochenende sind im Kanton Schwyz kein Problem."
            },
            {
                "icon": "fa-chart-line",
                "title": "Top-Preise für Allradler",
                "text": "Allrad-Fahrzeuge, Kombis und Pickups aus den Schwyzer Berg- und Seeregionen sind im Export sehr gefragt. Davon profitieren Sie mit einem überdurchschnittlichen Angebot."
            },
            {
                "icon": "fa-file-contract",
                "title": "Abmeldung inklusive",
                "text": "Wir holen Ihr Fahrzeug im ganzen Kanton Schwyz kostenlos ab, bezahlen sofort bar oder per Überweisung und erledigen die Abmeldung beim Verkehrsamt des Kantons Schwyz."
            }
        ],
        "strassenverkehrsamt": "Verkehrsamt des Kantons Schwyz",
        "areas": [
            "Schwyz",
            "Einsiedeln",
            "Küssnacht",
            "Brunnen",
            "Arth-Goldau",
            "Pfäffikon SZ",
            "March",
            "Höfe"
        ],
        "nearbySlugs": [
            "zug",
            "luzern",
            "zentralschweiz"
        ]
    },
    {
        "slug": "zentralschweiz",
        "name": "Zentralschweiz",
        "regionPhrase": "in der Zentralschweiz",
        "title": "Autoankauf Zentralschweiz – Ankauf ab Sursee",
        "description": "Autoankauf Zentralschweiz: Prela kauft ab Sursee in Luzern, Zug, Schwyz, Uri sowie Ob- und Nidwalden. Bewertung innert 24 Stunden, gratis Abholung, Barzahlung.",
        "h1": "Autoankauf Zentralschweiz",
        "lead": "Ihr regionaler Autoankäufer mitten in der Zentralschweiz – verwurzelt in Sursee, präsent in jedem Kanton",
        "intro": [
            "Die Zentralschweiz ist unser Zuhause – und zwar nicht als Filiale, sondern als Ursprung. Vom Hauptsitz an der Allmendstrasse 10 in Sursee aus betreut Prela Automobile seit über 25 Jahren die sechs Kantone Luzern, Zug, Schwyz, Uri, Obwalden und Nidwalden. Wer hier ein Fahrzeug verkaufen möchte, spricht mit einem Ankäufer, der die Region und ihre Strassen von Emmen bis zum Gotthard aus dem Effeff kennt.",
            "Zwischen Vierwaldstättersee, Zugersee und den Voralpen fahren die Menschen anders als im Flachland. 4x4-Modelle, robuste Kombis und Nutzfahrzeuge prägen das Bild vom Entlebuch bis ins Urnerland – und genau diese Fahrzeuge sind bei unseren Exportkunden besonders gefragt. Deshalb erzielen allradgetriebene und geländetaugliche Autos aus der Zentralschweiz bei uns regelmässig überdurchschnittliche Preise.",
            "Weil die Wege in der Zentralschweiz kurz sind, sind wir schnell bei Ihnen: In Luzern und Zug stehen wir oft schon am selben Tag vor der Tür, nach Schwyz, Stans, Sarnen, Altdorf, Küssnacht oder hinauf nach Engelberg reicht unser Netz genauso zuverlässig. Distanz oder Höhenmeter sind für uns kein Hindernis – die Abholung bleibt in jedem Winkel der Region kostenlos.",
            "Wir kaufen alle Marken in jedem Zustand: den gepflegten Familienwagen aus einer Zuger Garage ebenso wie den vielgefahrenen Occasion-SUV eines Schwyzer Handwerkers oder das ältere Fahrzeug mit Defekt aus Uri. Nach dem Verkauf übernehmen wir die Abmeldung beim jeweiligen kantonalen Strassenverkehrsamt für Sie, und die Bezahlung erfolgt sofort – bar oder per Banküberweisung, ganz wie es Ihnen passt."
        ],
        "highlightTitle": "Der zentrale Knotenpunkt für <span>Autoankauf in der Zentralschweiz</span>",
        "highlightText": "Sursee liegt geografisch wie logistisch im Herzen der Region – von hier erreichen wir jeden zentralschweizerischen Kanton in kurzer Zeit. Diese zentrale Lage ist Ihr Vorteil: Statt Ihr Auto zu einem entfernten Händler zu karren, kommt der Käufer zu Ihnen. Ob in der Stadt Luzern, in einer Zuger Gemeinde oder in einem Bergdorf im Nidwaldner Hinterland – Sie erhalten dieselbe schnelle Bewertung, denselben fairen Marktpreis und dieselbe unkomplizierte Abwicklung aus einer Hand.",
        "usps": [
            {
                "icon": "fa-location-dot",
                "title": "Verwurzelt in der Region",
                "text": "Hauptsitz in Sursee, tätig in Luzern, Zug, Schwyz, Uri, Obwalden und Nidwalden – wir sind der lokale Ankäufer der ganzen Zentralschweiz."
            },
            {
                "icon": "fa-car",
                "title": "Starke Preise für 4x4 & Nutzfahrzeuge",
                "text": "Allradmodelle, Kombis und Nutzfahrzeuge aus dem voralpinen Terrain sind bei unseren Käufern gefragt und erzielen hier überdurchschnittliche Preise."
            },
            {
                "icon": "fa-clock",
                "title": "Kurze Wege, schnelle Abholung",
                "text": "Dank zentraler Lage erreichen wir jeden Kanton rasch – kostenlose Bewertung innert 24 Stunden und Abholung bis ins hinterste Bergtal."
            }
        ],
        "strassenverkehrsamt": "das jeweilige kantonale Strassenverkehrsamt",
        "areas": [
            "Luzern",
            "Zug",
            "Schwyz",
            "Stans",
            "Sarnen",
            "Altdorf",
            "Küssnacht",
            "Engelberg"
        ],
        "nearbySlugs": [
            "luzern",
            "zug",
            "schwyz"
        ]
    }
];

export const getCity = (slug: string) => CITIES.find((c) => c.slug === slug);
