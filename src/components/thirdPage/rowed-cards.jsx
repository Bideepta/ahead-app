import React, { useRef, useEffect } from "react";
import { Card, CardGroup } from "react-bootstrap";
import "./rowed-cards.css";

function Row_of_card() {
  const titleStyle = {
    fontSize: 45,
    fontWeight: "bold",
    paddingLeft: 45,
    padding: 55,
    paddingTop: 55,
  };
  const cardStyle1 = {
    maxWidth: "300px",
    height: "auto",
    margin: "20px",
    borderRadius: "12px",
    backgroundColor: "#F7FFE5",
    padding: "10px",
    textAlign: "left",
    border: "none",
    transform: "translateX(100px)",
  };
  const cardStyle2 = {
    maxWidth: "300px",
    height: "auto",
    margin: "20px",
    borderRadius: "12px",
    backgroundColor: "#EDE4FF",
    padding: "10px",
    textAlign: "left",
    border: "none",
    transform: "translateX(100px)",
  };
  const cardStyle3 = {
    maxWidth: "300px",
    height: "auto",
    margin: "20px",
    borderRadius: "12px",
    backgroundColor: "#6528F7",
    color: "white",
    padding: "10px",
    textAlign: "left",
    border: "none",
  };
  const cardStyle4 = {
    maxWidth: "300px",
    height: "auto",
    margin: "20px",
    borderRadius: "12px",
    backgroundColor: "#FFEECC",
    padding: "15px",
    textAlign: "left",
    border: "none",
    transform: "translateX(100px)",
  };

  const emojiStyle = {
    width: 30,
    height: 30,
  };
  const hiddenCard = "hiddenCard"; // New class for initially hidden cards

  const cardRefs = useRef([]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove(hiddenCard);
          entry.target.style.transform = "translateX(0)";
          observer.unobserve(entry.target);
        }
      });
    };
    
    const observer = new IntersectionObserver(handleIntersection, options);

    cardRefs.current.forEach((cardRef) => {
      observer.observe(cardRef);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="container">
      <div style={{ marginLeft: "0px", paddingBottom: 0 }}>
        <Card style={{ border: "none" }}>
          <div style={{ display: "flex" }}>
            <div style={{ display: "block" }}>
              <Card.Title style={titleStyle}>
                Does this sound familiar ...
              </Card.Title>
            </div>
            <img
              src="/monster9.png"
              alt="monsterSmallGoing"
              style={{
                width: 120,
                height: 120,
                position: "relative",
                left: "1%",
                zIndex: 1,
                top: 20,
                transform: "scaleX(-1) rotate(15deg)",
              }}
            />
          </div>
          <CardGroup>
            <Card
              ref={(ref) => cardRefs.current.push(ref)}
              className={`smallCard ${hiddenCard}`}
              style={cardStyle1}
            >
              <Card.Body>
                <img src="/in-love.png" alt="in-love" style={emojiStyle} />
                <Card.Title style={{ fontSize: 18, paddingTop: 20 }}>
                  You argue with a colleague
                </Card.Title>
                <Card.Text style={{ fontSize: 14 }}>
                  You get angry and defensive, instead of staying open and
                  working towards common ground.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card
              ref={(ref) => cardRefs.current.push(ref)}
              className={`smallCard ${hiddenCard}`}
              style={cardStyle2}
            >
              <Card.Body>
                <img src="/angry.png" alt="angry" style={emojiStyle} />

                <Card.Title style={{ fontSize: 18, paddingTop: 20 }}>
                  You argue with a colleague
                </Card.Title>
                <Card.Text style={{ fontSize: 14 }}>
                  You get angry and defensive, instead of staying open and
                  working towards common ground.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card ref={(ref) => cardRefs.current.push(ref)}
              className={`smallCard ${hiddenCard}`} style={cardStyle3}>
              <Card.Body>
                <img src="/happy.png" alt="happy" style={emojiStyle} />

                <Card.Title style={{ fontSize: 18, paddingTop: 20 }}>
                  You get a promotion at work
                </Card.Title>
                <Card.Text style={{ fontSize: 14 }}>
                  You question yourself and wonder when they'll realize you're
                  an unqualified imposter, instead of trusting yourself & your
                  abilities
                </Card.Text>
              </Card.Body>
            </Card>
            <Card
              ref={(ref) => cardRefs.current.push(ref)}
              className={`smallCard ${hiddenCard}`}
              style={cardStyle4}
            >
              <Card.Body>
                <img src="/sweating.png" alt="sweating" style={emojiStyle} />

                <Card.Title style={{ fontSize: 18, paddingTop: 20 }}>
                  You get a promotion at work
                </Card.Title>
                <Card.Text style={{ fontSize: 14 }}>
                  You question yourself and wonder when they'll realize you're
                  an unqualified imposter, instead of trusting yourself & your
                  abilities
                </Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
        </Card>
      </div>
    </div>
  );
}

export default Row_of_card;
