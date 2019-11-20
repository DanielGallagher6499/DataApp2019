import React from 'react';
import '../App.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

class Trending extends React.Component {

  render() {
    return (
      <div>
        <h1>Hello from Trending</h1>


<CardGroup>
  <Card>
    <Card.Img variant="call of duty" src="https://soundtracktracklist.com/wp-content/uploads/2019/06/Call-of-Duty-Modern-Warfare-2019-game.jpg"/>
    <Card.Body>
      <Card.Title>Call of Duty : Modern Warfare</Card.Title>
      <Card.Text>
      Call of Duty: Modern Warfare is a first-person shooter video game developed by Infinity Ward and published by Activision. ... The game's Special Ops mode features cooperative play missions that follow up the campaign's story. The multiplayer mode supports cross-platform multiplayer for the first time in the series.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="fifa20" src="https://cdn01.nintendo-europe.com/media/images/11_square_images/games_18/nintendo_switch_5/SQ_NSwitch_EaSportsFifa20NintendoSwitchLegacyEdition_image500w.jpg" />
    <Card.Body>
      <Card.Title>Fifa 20</Card.Title>
      <Card.Text>
      FIFA 20 is a football simulation video game published by Electronic Arts as part of the FIFA series. It is the 27th installment in the FIFA series, and was released on 27 September 2019 for Microsoft Windows, PlayStation 4, Xbox One, and Nintendo Switch.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="fortnite" src="https://gamerheadquarters.com/hub/fortnite/4.jpg" />
    <Card.Body>
      <Card.Title>Fortnite</Card.Title>
      <Card.Text>
      What is Fortnite? Fortnite is a video game for PlayStation 4, Xbox One, Nintendo Switch, Windows, Mac, and mobile that takes elements from sandbox-building games and adds the fast-paced action of a third-person shooter.
      </Card.Text>
    </Card.Body>
  </Card>
</CardGroup>

<CardGroup>
  <Card>
    <Card.Img variant="call of duty" src="https://soundtracktracklist.com/wp-content/uploads/2019/06/Call-of-Duty-Modern-Warfare-2019-game.jpg"/>
    <Card.Body>
      <Card.Title>Call of Duty : Modern Warfare</Card.Title>
      <Card.Text>
      Call of Duty: Modern Warfare is a first-person shooter video game developed by Infinity Ward and published by Activision. ... The game's Special Ops mode features cooperative play missions that follow up the campaign's story. The multiplayer mode supports cross-platform multiplayer for the first time in the series.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="fifa20" src="https://cdn01.nintendo-europe.com/media/images/11_square_images/games_18/nintendo_switch_5/SQ_NSwitch_EaSportsFifa20NintendoSwitchLegacyEdition_image500w.jpg" />
    <Card.Body>
      <Card.Title>Fifa 20</Card.Title>
      <Card.Text>
      FIFA 20 is a football simulation video game published by Electronic Arts as part of the FIFA series. It is the 27th installment in the FIFA series, and was released on 27 September 2019 for Microsoft Windows, PlayStation 4, Xbox One, and Nintendo Switch.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="fortnite" src="https://gamerheadquarters.com/hub/fortnite/4.jpg" />
    <Card.Body>
      <Card.Title>Fortnite</Card.Title>
      <Card.Text>
      What is Fortnite? Fortnite is a video game for PlayStation 4, Xbox One, Nintendo Switch, Windows, Mac, and mobile that takes elements from sandbox-building games and adds the fast-paced action of a third-person shooter.
      </Card.Text>
    </Card.Body>
  </Card>
</CardGroup>
      </div>
    );
  }
}

export default Trending;