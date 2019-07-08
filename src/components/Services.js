import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cocktails",
        info:
          "lorem ipsum dolor sit amet consectetur adipisicong elit. Magni, corporis"
      },
      {
        icon: <FaHiking />,
        title: "Endless Hikings",
        info:
          "lorem ipsum dolor sit amet consectetur adipisicong elit. Magni, corporis"
      },
      {
        icon: <FaShuttleVan />,
        title: "free shuttle",
        info:
          "lorem ipsum dolor sit amet consectetur adipisicong elit. Magni, corporis"
      },
      {
        icon: <FaBeer />,
        title: "strongest beer",
        info:
          "lorem ipsum dolor sit amet consectetur adipisicong elit. Magni, corporis"
      }
    ]
  };

  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
