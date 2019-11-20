import React from 'react';
import '../App.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

class Trending extends React.Component {

  render() {
    return (
      <div >
        <img src={"http://spaceglo.cz/wp-content/uploads/2018/03/1920-x-300-banner.jpg"} alt="trending banner" height = "18.52%" width = "100%" />
  {/*Top three card images on the page*/}
<CardGroup>
  <Card bg="dark" text="white">
    <Card.Img variant="callofduty" src="https://soundtracktracklist.com/wp-content/uploads/2019/06/Call-of-Duty-Modern-Warfare-2019-game.jpg"/>
    <Card.Body>
      <Card.Title>Call of Duty : Modern Warfare</Card.Title>
      <Card.Text>
      Call of Duty: Modern Warfare is a first-person shooter video game developed by Infinity Ward and published by Activision. ... The game's Special Ops mode features cooperative play missions that follow up the campaign's story. The multiplayer mode supports cross-platform multiplayer for the first time in the series.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card bg="dark" text="white">
    <Card.Img variant="fifa20" src="https://cdn01.nintendo-europe.com/media/images/11_square_images/games_18/nintendo_switch_5/SQ_NSwitch_EaSportsFifa20NintendoSwitchLegacyEdition_image500w.jpg" />
    <Card.Body>
      <Card.Title>Fifa 20</Card.Title>
      <Card.Text>
      FIFA 20 is a football simulation video game published by Electronic Arts as part of the FIFA series. It is the 27th installment in the FIFA series, and was released on 27 September 2019 for Microsoft Windows, PlayStation 4, Xbox One, and Nintendo Switch.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card bg="dark" text="white">
    <Card.Img variant="fortnite" src="https://pbs.twimg.com/profile_images/1131354293548847105/9jnZrEU4.png" />
    <Card.Body>
      <Card.Title>Fortnite</Card.Title>
      <Card.Text>
      What is Fortnite? Fortnite is a video game for PlayStation 4, Xbox One, Nintendo Switch, Windows, Mac, and mobile that takes elements from sandbox-building games and adds the fast-paced action of a third-person shooter.
      </Card.Text>
    </Card.Body>
  </Card>
</CardGroup>
{/*Second row of three card images on the page*/}
<CardGroup>
<Card bg="dark" text="white">
    <Card.Img variant="battlefield" src="https://i1.sndcdn.com/artworks-000353835192-v6a8if-t500x500.jpg"/>
    <Card.Body>
      <Card.Title>Battlefield V</Card.Title>
      <Card.Text>
      The latest entry in an iconic series that dates back to 2002, Battlefield 5 is a celebration of the chaos and the drama of combined arms warfare. At its core is the concept of the squad, a small group of players that can cooperate and coordinate together to achieve goals in-game.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card bg="dark" text="white">
    <Card.Img variant="starwars" src="https://farm5.staticflickr.com/4576/38238908296_4832e757cd.jpg" />
    <Card.Body>
      <Card.Title>Star Wars : Battlefront</Card.Title>
      <Card.Text>
      Star Wars Battlefront II features a single-player story mode, a customizable character class system, and content based on The Force Awakens and The Last Jedi movies. It also features vehicles and locations from the original, prequel, and sequel Star Wars movie trilogies.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card bg="dark" text="white">
    <Card.Img variant="nfs heat" src="https://i1.sndcdn.com/artworks-000584824958-3l62nt-t500x500.jpg" />
    <Card.Body>
      <Card.Title>Need For Speed : Heat</Card.Title>
      <Card.Text>
      Need for Speed Heat is a racing game set in an open world environment called Palm City, a fictionalised version of the city of Miami, Florida and its surrounding area. ... Unlike Need for Speed Payback, the game does not include a 24-hour day-night cycle, but players can switch between day and night.
      </Card.Text>
    </Card.Body>
  </Card>
</CardGroup>
{/*Third row of three card images on the page*/}
<CardGroup>
<Card bg="dark" text="white">
    <Card.Img variant="GTSport" src="https://i1.sndcdn.com/artworks-000286279625-4arrqg-t500x500.jpg"/>
    <Card.Body>
      <Card.Title>Grand Turismo Sport</Card.Title>
      <Card.Text>
      Similar to its predecessors, Gran Turismo Sport is a racing game and includes two game modes: "Sport Mode" and "Arcade Mode". Online racing is also featured in the game. The game has been described as different from the "Prologue" titles seen in the past in the series and features more content.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card bg="dark" text="white">
    <Card.Img variant="TheWitcher" src="https://i1.sndcdn.com/artworks-000082317473-tqckdp-t500x500.jpg" />
    <Card.Body>
      <Card.Title>The Witcher 3: Wild Hunt</Card.Title>
      <Card.Text>
      The Witcher® 3: Wild Hunt is a story-driven, next-generation open world role-playing game, set in a visually stunning fantasy universe, full of meaningful choices and impactful consequences. You play as Geralt of Rivia, a monster hunter tasked with finding a child from an ancient prophecy.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card bg="dark" text="white">
    <Card.Img variant="borderlands" src="http://nerdreactor.com/wp-content/uploads/2019/09/Borderlands-3-500x500_c.jpg" />
    <Card.Body>
      <Card.Title>Borderlands 3</Card.Title>
      <Card.Text>
      Borderlands 3 is an action role-playing first-person shooter video game developed by Gearbox Software and published by 2K Games. It is the sequel to 2012's Borderlands 2, and the fourth main entry in the Borderlands series.
      </Card.Text>
    </Card.Body>
  </Card>
</CardGroup>
{/*Fourth row of three card images on the page*/}
<CardGroup>
  <Card bg="dark" text="white">
    <Card.Img variant="Apex" src="https://gamerheadquarters.com/hub/titanfall/apexlegends.jpg"/>
    <Card.Body>
      <Card.Title>Apex Legends</Card.Title>
      <Card.Text>
      Apex Legends is a battle royale game in which up to 20 three-man squads land on an island before searching for weapons and supplies to then attempt to defeat all other players in combat. The final team alive wins the round. The game is set in the same sci-fi universe as Respawn Entertainment's Titanfall franchise.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card bg="dark" text="white">
    <Card.Img variant="Madden" src="https://icdn6.digitaltrends.com/image/madden-20-patrick-mahomes-thumg-500x500.jpg" />
    <Card.Body>
      <Card.Title>Madden 20</Card.Title>
      <Card.Text>
      The new Madden 20 features include a QB1 mode where you take on the College Football playoffs and the combine in a story mode style play that combines some of the Longshot features with Franchise mode. You also get new Superstar X-Factor players and new Madden Ultimate Team missions. That's just the start.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card bg="dark" text="white">
    <Card.Img variant="reddead" src="https://i1.sndcdn.com/artworks-000466512579-cp7kvl-t500x500.jpg" />
    <Card.Body>
      <Card.Title>Red Dead Redemption 2</Card.Title>
      <Card.Text>
      Red Dead Redemption 2 is a Western-themed action-adventure game. Played from a first or third-person perspective, the game is set in an open-world environment featuring a fictionalized version of the Western, Midwestern and Southern United States.
      </Card.Text>
    </Card.Body>
  </Card>
</CardGroup>
{/*Fifth row of three card images on the page*/}
<CardGroup>
  <Card bg="dark" text="white">
    <Card.Img variant="forza" src="https://nerdreactor.com/wp-content/uploads/2018/06/Forza-Horizon-4-500x500_c.jpg"/>
    <Card.Body>
      <Card.Title>Forza Horizon 4</Card.Title>
      <Card.Text>
      Forza Horizon 4 is a racing video game set in an open world environment based in a fictionalised Great Britain, with regions that include condensed representations of Edinburgh, the Lake District (including Derwentwater), and the Cotswolds (including Broadway), among others, and features over 450 licensed cars.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card bg="dark" text="white">
    <Card.Img variant="hitman" src="https://i1.sndcdn.com/artworks-000467743146-fqrtj7-t500x500.jpg" />
    <Card.Body>
      <Card.Title>Hitman 2</Card.Title>
      <Card.Text>
      Hitman 2 is a stealth video game developed by IO Interactive and published by Warner Bros. Interactive Entertainment for Microsoft Windows, PlayStation 4, and Xbox One. It is the seventh entry in the Hitman video game series and is the sequel to the 2016 game Hitman.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card bg="dark" text="white">
    <Card.Img variant="PUBG" src="https://blocktribune.com/wp-content/uploads/2019/07/PUBG.jpg" />
    <Card.Body>
      <Card.Title>Player Unknown's Battlegrounds</Card.Title>
      <Card.Text>
      Battlegrounds is a player versus player shooter game in which up to one hundred players fight in a battle royale, a type of large-scale last man standing deathmatch where players fight to remain the last alive. Players can choose to enter the match solo, duo, or with a small team of up to four people.
      </Card.Text>
    </Card.Body>
  </Card>
</CardGroup>
{/*Sixth row of three card images on the page*/}
<CardGroup>
  <Card bg="dark" text="white">
    <Card.Img variant="xplane" src="https://steamuserimages-a.akamaihd.net/ugc/915797707425207906/F4C524D5517465DA3726D37C939956BE3BF0CF71/"/>
    <Card.Body>
      <Card.Title>X-Plane 11</Card.Title>
      <Card.Text>
      X-Plane 11 is the detailed, realistic, and modern simulator you've been waiting for. A completely redesigned, intuitive user interface that makes setting up and editing your flight a breeze. Consistently usable 3-D cockpits and stunningly high-resolution exterior models for all included aircraft.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card bg="dark" text="white">
    <Card.Img variant="spiderman" src="https://howlongtobeat.com/gameimages/44852_Spider-Man_(2017).jpg" />
    <Card.Body>
      <Card.Title>Marvel's Spider-Man</Card.Title>
      <Card.Text>
      Marvel's Spider-Man is a 2018 action-adventure game developed by Insomniac Games and published by Sony Interactive Entertainment. Based on the Marvel Comics superhero Spider-Man, it is inspired by the long-running comic book mythology and adaptations in other media.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card bg="dark" text="white">
    <Card.Img variant="assasins" src="https://i1.sndcdn.com/artworks-000426951480-g8l9wn-t500x500.jpg" />
    <Card.Body>
      <Card.Title>Assassin's Creed Odyssey</Card.Title>
      <Card.Text>
      This is an action-adventure game in which players assume the role of Alexios or Kassandra, mercenaries on a quest for vengeance. As players explore an open-world environment in Ancient Greece, they interact with characters, infiltrate enemy bases and strongholds, and kill human enemies.
      </Card.Text>
    </Card.Body>
  </Card>
</CardGroup>
      </div>
    );
  }
}

export default Trending;