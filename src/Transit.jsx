import React from 'react';
import './style/transit.css';
import TransitMovTable from './media/TransitMovTable_wm.gif';
import OrbitZoom from './media/OrbitZoom_wm_quick.gif';
import PlanetInteract from './media/PlanetInteractions.png'
import Precession from './media/pre_wm.gif'
import PrecessionFace from './media/PrecessionFig.png'
import K108top from './media/119_spec_stacktrans_lc_top.png'
import K108bottom from './media/spec_stacktrans_lc_bottom.png'
import K108Animate from './media/animated_wm.gif'
import K3151Architecture from './media/apj517318f8_hr.jpg'
import K3151Transits from './media/3151_transits.png'
import K3151Orbit1 from './media/3151_orbit_hq_gaps_wm_crop.gif'
import K3151Orbit2 from './media/3151_trans_hq_wm_crop.gif'
import K223Librate from './media/223_librate_wm.gif'
import K223Mig from './media/mig.gif'


const Transit = () => (
  <div className="transit">
    <h2>Exoplanet Transit Overview</h2>
    <hr className="bar" />
    <p>
      Exoplanets (planets around stars other than the sun) are so far away that
      we can only in very rare cases take a <a href="https://www.nature.com/articles/nature09684" target="_blank">direct photograph</a> of the planets
      themselves. Astronomers therefore primarily detect planets by measuring
      a planet's influence on the star it orbits around. This is
      because stars are much larger and brighter than planets and thus easier to
      carefully measure. The most succesful method uses photometry (brightness measurements) of the stars, which I will explain below (another common method is to use a star's <a href="https://en.wikipedia.org/wiki/Methods_of_detecting_exoplanets#Radial_velocity" target="_blank">radial velocities</a>, which I won't discuss in detail).
    </p>
    <h4>Exoplanet Transits</h4>
    <p>
      Planets orbit their stars on <a href="https://en.wikipedia.org/wiki/Ellipse" target="_blank">ellipses</a> (the most common of which is a
      circle), due to the Newtonian gravitational pull of their stars. Depending
      on the orientation of a planet's orbit, it may pass between its host star
      and a far away observer on Earth as it orbits. When it does so, it will
      block some of the star's light, a phenomenon known as a planet "transit."
      The fraction of the light blocked tells you the size of the planet relative to
      the star. Below is a demonstration of an ideal transit and light-curve
      of a Jupiter-like planet on a 20 day orbit around a Sun-like star with
      realistic limb-darkening (dimming of the star at its edges).
    </p>
    <img src={TransitMovTable} alt="Single Transit" />
    <p>
      This will happen regularly as the planet continues its orbit around and around the star, with a transit occurring once every revolution. The periodic orbit of a planet is shown in 3-dimensions below, and the resulting the transit light-curve on the bottom is from the perspective of an observer whose line of sight is indicated by the gray arrow.
    </p>
    <img src={OrbitZoom} alt="Periodic Transits" />
    <p>
			With the measurement of a planet's orbital period from its repeated transits, <a href="http://astro.physics.uiowa.edu/ITU/glossary/keplers-third-law/" target="_blank">Kepler's 3rd Law</a> tells you the distance from the planet to the star (with a little information about the type of star).  For most known exoplanets the orbital periods are only around ten days, which means their orbits are inside that of Mercury and their surfaces are likely to be swelteringly hot. In summary, simply by monitoring the brightness of stars as a function of time, you can learn about the size, semi-major axis (distance to the star), and temperature of the planets they host.
    <p>
    </p>
			There are some confounding factors that may make this measurement difficult (e.g. <a href="https://www.nasa.gov/sites/default/files/thumbnails/image/kepler_fig3_0.jpg" target="_blank">binary stars eclipsing each other</a> or spots on the stars themselves), but with careful analysis these types of false positives can be eliminated. 
    </p>

    <h4>Multiple Planet Systems</h4>

    <p>
Often exoplanet systems have more than one planet (just like our own Solar system). In such systems, even more can be learned about the planets by detecting the interactions among the planets. Instead of following perfect ellipses, planets in multi-planet systems are perturbed by the pull of their neighbors' gravity. This will change the planets' periods and shapes slightly with time. In fact, this is how the planet <a href="https://en.wikipedia.org/wiki/Discovery_of_Neptune#Irregularities_in_Uranus's_orbit" target="_blank">Neptune was discovered</a>! 
    </p>
    <img src={PlanetInteract} alt="Gravitational Perturbations" />
    <p>
The amplitude and shape of the variations in the planets' periods allows astronomers to back out the planets' masses (more massive planets interact more strongly with each other). They can also reveal other information like a planet's eccentricity (the ellipticity of a the planet's orbit), since the shape of the orbits affects how close planets are in space at any given time and therefore how strongly the planets interact. 
    </p>
    <p>
In rare cases, planetary systems may even be mis-aligned in the sense that they are not coplanar. Our own <a href="https://www.nationalgeographic.org/media/orbital-plane/" target="_blank">solar system is very flat</a>, consistent with the <a href="https://en.wikipedia.org/wiki/Nebular_hypothesis" target="_blank">Nebular Hypothesis</a> of formation. But if two planets are not coplanar, they will interact with each other and cause precession, just as a top <a href="https://en.wikipedia.org/wiki/Precession" target="_blank">precesses around in a circle</a> due to gravity on earth. 
    </p>
    <img src={Precession} alt="Exoplanet Precession" />
    <p>
    This will result in the transits of the planets across the face of the star changing as a function of time as shown below (where the arrows indicate the passage of time, i.e. sequential orbits):
    </p>
    <img src={PrecessionFace} alt="Transit Precession" />
		<p>
From this we can learn about the misalignment (known as mutual inclination) between the planets. A mutually-inclined 2-planet system that I studied is <a href="http://iopscience.iop.org/article/10.3847/1538-3881/153/1/45" target="_blank">Kepler-108</a> -- its transits are shown below. The top panel shows all of the data sequentially, and periodic dips of two different depths indicate the two transiting planets. The color of the plotted points changes with time (the star's actual color never changes this is just for visualization purposes). The bottom panel shows the transits of the two planets stacked on top of each other and stretched out for clarity, with the same time-based color scheme as the top panel. This allows us to make out the transit shape changing with time despite the noise: the stacked transits in the lower right panel reveal the depth and duration changes of Kepler-108's outer planet. This is due to the planets' precession over the ~4 years of data as illustrated above. The inner planet (left hand side) is also changing, but so slowly so that it is not easily visible with these data.
		</p>
    <img src={K108top} alt="Kepler-108 Top" />
    <img src={K108bottom} alt="Kepler-108 Bottom" />
		<p>
The system likely completes a full precession cycle, i.e., it moves up and back around to its original transiting geometry, every ~5,000 years. These small changes indicates that planets are not coplanar, but rather their orbits look more like the below simulation from our perspective (where the yellow circle is the star and the red & blue circles are planets -- orbits are to scale but sizes of the bodies increased for visibility):
		</p>
    <img src={K108Animate} alt="" />
		<p>
The observed unusual orbits are likely the result of a major disruption event after their formation, otherwise they would likely still resemble the Solar System's coplanar configuration. The most probable cause of such a drastic change is a collision with another unseen planet a long time ago. That planet may have been knocked into the star, ejected from the system all together, or possibly just thrown into an unobservable orbit, while deflecting the two visible planets onto their current orbits. We can use clues like these to try to understand what happened in planetary systems' distant pasts.
		</p>
	
    <h4>Multiple Star Systems</h4>

		<p>
Roughly half of all stars are single stars with no stellar companions (like our Sun), but the other half are bound in multiple star systems. Most frequently these stars are found in pairs (called binaries) or threes (called triples), but occasionally up to <a href="https://en.wikipedia.org/wiki/ADS_9731" target="_blank">6</a> or <a href="https://en.wikipedia.org/wiki/Nu_Scorpii" target="_blank">7</a> stars may be gravitationally bound together. Planets have been found orbiting a single star in a widely-separate binary, but also may orbit both of the stars in the binary at once (<a href="https://www.starwars.com/databank/tatooine" target="_blank">as popularized long ago in a far away galaxy</a>). At the time of writing (2018) there are 12 such planets known. When planets are in a system with multiple stars, the stars interact with each other significantly and can cause aperiodic transits of changing duration and depth. Further, since stars are much greater in mass than planets, if they exhibit similar precession effects as planets, the effects can be greater in size and speed. One such system I studied is <a href="http://iopscience.iop.org/article/10.1088/0004-637X/809/1/26" target="_blank">Kepler-453</a>:
		</p>
    <img src={K3151Architecture} alt="" />
		<p>
The above figure (<a href="http://iopscience.iop.org/article/10.1088/0004-637X/809/1/26" target="_blank">from the publication</a>) shows the geometry of the system -- the planet (blue b) orbits around the pair of closely-orbiting stars in the middle (red A and B). The units of AU represent the mean distance from the Earth to the Sun, so you can see that the planet is slightly closer to it's central stars than we are to the sun. The planet lies near the habitable zone, but is a gas planet, not a rocky body like the Earth (though it could have rocky moons!). The bottom panel above shows the system as we view it, nearly edge-on. The stars are very unequal in size as one of them is a small M-dwarf, resulting in assymetry in the binary system. The 3-body interactions cause the transits to look very different for each orbit of the planet, including the first 3 "transits," which were actually missed altogether! The transit data look like this:
		</p>
    <img src={K3151Transits} alt="" />
		<p>
Which we can reproduce by modeling a slightly inclined planet around an unequal mass binary star system (red and yellow circles are the two stars, blue is the planet - orbits are to scale, but sizes of the bodies are not):
		</p>
    <img src={K3151Orbit1} alt="" />
		<p>
Zooming in on the transit events further, we can see the first 3 near-miss "transits" followed by the three observed transits all with different shapes and durations due to the relative motion of the planet and star during transit, exactly explaining the data above.
		</p>
    <img src={K3151Orbit2} alt="" />
		<p>
Some systems are more complicated and have both multiple stars and multiple planets (although only one such system, which I worked on modeling, is known so far: <a href="https://arxiv.org/abs/1208.5489" target="_blank">Kepler-47</a>).
		</p>

    <h4>Planet System Formation and Evolution</h4>
		
		<p>
How and where planets form has <a href="https://archive.org/details/allgemeinenaturg00kant" target="_blank">puzzled scientists for centuries</a>. Currently, planets are almost universally thought to form in disks of gas and dust that surround stars during and after their birth. Small planet cores may coagulate due to repeated collisions of small rocky particles and giant planets can then form from runaway gas accretion onto these cores. I already mentioned above how we use mutually-inclined systems (like Kepler-108) to learn about giant planet systems' pasts. 
		</p>
		<p>
The formation pathway of smaller planets is hotly debated among scientists. The Solar System's inner planets, including Earth, are thought to have formed through a process of accreting smaller bodies (planetesimals) in a series of huge impacts after any nearby gas had dissipated. Earth-size and Neptune-size planets around other stars may have formed in similar ways, or, alternatively, formed far away and migrated in an orderly manner through the primordial disk to their current location, or even formed in place through pebbles gradually accreting. Different formation methods leave different signatures observable today. <a href="https://www.nature.com/articles/nature17445" target="_blank">Kepler-223 is an example</a> of a system that I analyzed that most likely went through disk migration (the process of moving planets around through a system's natal gas disk before it dissipated). The system has four planets which are arranged in a very orderly pattern compared to the random scatter expected as an of giant impacts. For every 8 orbits of Kepler-223's innermost planet (Kepler-223 b), the second planet (Kepler-223 c) goes around 6 times, the third planet (Kepler-223 d) goes around 4 times, and the outermost planet (Kepler-223 e) goes around 3 times. Such a ratio of integers is known as a resonance, somewhat familiar in structure to those who study music as even intervals and octaves. If Kepler-223 had a song, it would sound like this:
		</p>
{/*    <img src={} alt="" /> */}
		<p>
where each note represents a different planet (higher frequency means it's moving faster) and each note is struck every time the planet completes an orbit. A resonance keeps the relative positions of the planets similar from orbit to orbit. We may visualize this by plotting the positions of all of the planets relative to, for example, the outermost planet. Below, we take a snapshot of the system whenever the 3rd planet passes the 4th planet (the outermost planet). We see that the other 2 planets are always close to the same position (although the move around a bit), which is only the case for resonance systems (in this diagram the relative sizes of the planets is correct, but they are blown up so that you may easily see their positions in the orbits).
		</p>
    <img src={K223Librate} alt="" />
		<p>
This observed repetitive configuration is consistent with a migration simulation (and is similar to some of <a href="https://en.wikipedia.org/wiki/Orbital_resonance#Laplace_resonance" target="_blank">Jupiter's moons</a> and possibly the <a href="https://www.nature.com/articles/nature10201" target="_blank">early Solar System</a>). We can see in the following animation how, under a drag force caused by interactions with the disk, planets that start outside of resonances move into and are caught in them. On the right hand side of the animation notice that the period ratios "catch" at 3:2 (1.5) and 4:3) 1.33, and then the planets start strongly interacting (big eccentricity wiggles). 
		</p>
    <img src={K223Mig} alt="" />
Animation courtesy of Daniel Fabrycky and Cezary Migazewski




  </div>
);

export default Transit;
