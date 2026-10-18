const roster = [
['Donovan Mitchell','Guard','donovan-mitchell',45,'Cleveland Cavaliers','1628378','An explosive scoring guard who creates off the dribble and stretches defenses from beyond the arc.','Scored a Cavaliers-record 71 points against Chicago in January 2023.','https://www.nba.com/cavaliers/news/recap-bulls-230102'],
['Cooper Flagg','Forward','cooper-flagg',32,'Dallas Mavericks','1642843','A versatile forward whose game spans scoring, rebounding, playmaking and defense.','2025 No. 1 pick. 2025–26 NBA Rookie of the Year.','https://www.nba.com/player/1642843/cooper-flagg/bio'],
['James Harden','Guard','james-harden',1,'Cleveland Cavaliers','201935','A left-handed creator known for his step-back jumper, pick-and-roll passing and control of the offense.','2018 NBA MVP. Three consecutive scoring titles, 2018–2020.','https://www.nba.com/news/2018-19-nba-scoring-champion-james-harden'],
['Matas Buzelis','Forward','matas-buzelis',14,'Chicago Bulls','1641824','An athletic forward who pairs perimeter skills with length around the basket.','2024–25 NBA All-Rookie Second Team.','https://www.nba.com/news/2024-25-all-rookie-teams-announced'],
['Bam Adebayo','Center / Forward','bam-adebayo',13,'Miami Heat','1628389','A versatile big who anchors the defense, works the glass and connects the offense through his passing.','Olympic gold in Tokyo and Paris. NBA All-Defensive First Team in 2024.','https://api-hub.nba.com/player/1628389/bam-adebayo/bio'],
['Mikal Bridges','Guard / Forward','mikal-bridges',25,'New York Knicks','1628969','A two-way wing who combines perimeter defense with off-ball movement and outside shooting.','2021–22 All-Defensive First Team; runner-up for Defensive Player of the Year.','https://pr.nba.com/2021-22-kia-nba-all-defensive-team/'],
["Kel’el Ware",'Center','kelel-ware',9,'Milwaukee Bucks','1642276','A seven-foot center whose length supports rebounding, rim protection and finishing above the basket.','2024–25 NBA All-Rookie Second Team.','https://www.nba.com/news/2024-25-all-rookie-teams-announced'],
['Myles Turner','Center / Forward','myles-turner',3,'Milwaukee Bucks','1626167','A floor-spacing big who combines three-point range with a long track record of protecting the rim.','NBA blocks-per-game leader in 2019 and 2021.','https://www.nba.com/news/nba-players-who-led-in-blocks-in-multiple-seasons'],
['VJ Edgecombe','Guard','vj-edgecombe',77,'Philadelphia 76ers',null,'An athletic guard who brings energy in transition and activity on both ends.','No. 3 pick in 2025; scored 34 points in his NBA debut.','https://www.nba.com/sixers/76ers-players/vj-edgecombe'],
['Cason Wallace','Guard','cason-wallace',22,'Oklahoma City Thunder','1641717','A defense-first guard who pressures the ball and complements primary creators.','2023–24 NBA All-Rookie Second Team.','https://cdn.nba.com/teams/uploads/sites/1610612760/2025/04/24-25-Thunder-Postseason-Media-Guide.pdf'],
['Saddiq Bey','Guard / Forward','saddiq-bey',41,'New Orleans Pelicans','1630180','A strong wing with outside shooting and the ability to put together big scoring nights.','Scored a career-high 51 points against Orlando in March 2022.','https://www.nba.com/magic/news/magic-unable-slow-down-saddiq-bey-and-pistons-20220317'],
['Reed Sheppard','Guard','reed-sheppard',15,'Houston Rockets','1642263','A guard with shooting touch, playmaking instincts and active hands in passing lanes.','2024 SEC Freshman of the Year; No. 3 pick in the NBA Draft.','https://www.nba.com/draft/2024/prospects/reed-sheppard'],
['Julian Champagnie','Forward','julian-champagnie',30,'San Antonio Spurs','1630577','A perimeter forward who provides spacing and off-ball scoring.','Two-time All-Big East First Team selection at St. John’s, 2021 and 2022.','https://www.nba.com/spurs/news/spurs-claim-julian-champagnie-off-waivers'],
['Nikola Vučević','Center','nikola-vucevic',9,'Orlando Magic','202696','A veteran center with scoring touch inside and out, rebounding and passing from the post.','Two-time NBA All-Star.','https://www.nba.com/player/202696/nikola-vucevi%C4%86']
];
document.getElementById('players').innerHTML = roster.map(([name,position,slug,number,team,id,summary,achievement,source])=>{
const achievementPoints = achievement.split(/(?<=pick\.|MVP\.|Paris\.)\s+|;\s+/).map(point => point.charAt(0).toUpperCase() + point.slice(1));
const profile = id ? `https://www.nba.com/player/${id}/${slug}` : source;
return `<figure class="player"><div class="player-image"><span class="player-number">#${number}</span><img src="images/players/${slug}.png" alt="${name}" width="3504" height="2336" loading="lazy" decoding="async"></div><figcaption><div class="player-heading"><h3>${name}</h3><span class="position">${position}</span></div><p class="player-team">${team} <span>· #${number}</span></p><p class="player-summary">${summary}</p><p class="player-achievement">${achievementPoints.map(point => `<span class="achievement-point">${point}</span>`).join('')}</p><div class="player-sources"><a href="${profile}" target="_blank" rel="noopener noreferrer" aria-label="${name} NBA profile">NBA profile ↗</a><a href="${source}" target="_blank" rel="noopener noreferrer" aria-label="${name} achievement source">Career note ↗</a></div></figcaption></figure>`;
}).join('');

// NBA All-Star selections; Rising Stars and other All-Star Weekend events excluded.
const allStarRecords = {
  'donovan-mitchell': { years: [2020,2021,2022,2023,2024,2025,2026], source: 'https://cdn.nba.com/teams/uploads/sites/1610612739/2026/03/260308-boscle-notes.pdf' },
  'james-harden': { years: [2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2025], source: 'https://www.nba.com/watch/video/james-harden-2025-west-all-star-reserve-highlights' },
  'bam-adebayo': { years: [2020,2023,2024], source: 'https://www.nba.com/heat/news/adebayo-selected-to-2024-nba-all-star-team' },
  'nikola-vucevic': { years: [2019,2021], source: 'https://www.nba.com/magic/nikola-vucevic-named-2020-21-nba-all-star-20210223' }
};
roster.forEach(([name,,slug],index)=>{
  const record = allStarRecords[slug];
  if (!record) return;
  const rows = [...record.years].reverse().map(year=>`<li class="all-star-row"><span class="all-star-medallion" aria-hidden="true">★</span><span>NBA All-Star</span><span class="all-star-year">${year}</span></li>`).join('');
  document.querySelectorAll('.player figcaption')[index].insertAdjacentHTML('beforeend',`<section class="all-star-honors" aria-label="${name}: ${record.years.length} NBA All-Star selections"><div class="all-star-heading"><span class="all-star-ornament" aria-hidden="true">✦</span><h4>${record.years.length}× All-Star</h4><span class="all-star-ornament" aria-hidden="true">✦</span></div><ul>${rows}</ul><a class="all-star-source" href="${record.source}" target="_blank" rel="noopener noreferrer">NBA selection history ↗</a></section>`);
});

