import React, { useState } from 'react'
import './App.css'
import bg from './bg.png'
import bgDis from './bgDis.png'

function App() {

  const info = {
    default: {
      style: {
        color: "#000",
        borderColor: "#1698D9",
        backgroundImage: `url(${bg})`,
        backgroundColor: "#F2F2F2",
        circle: {
          background: "#1698D9"
        }
      },
      text: {
        appText: {
          text: `Чего сидишь? Порадуй котэ,`,
          span: `купи.`
        },
        upTitle: {
          text: "Сказочное заморское яство",
          color: "#666666"
        },
        text: {
          color: "#666666"
        },
        color: "#FFFFFF"
      }
    },
    defaultHover: {
      style: {
        color: "#000",
        borderColor: "#2EA8E6",
        backgroundColor: "#F2F2F2",
        backgroundImage: `url(${bg})`,
        circle: {
          background: "#2EA8E6"
        }
      },
      text: {
        appText: {
          text: `Чего сидишь? Порадуй котэ,`,
          span: `купи.`
        },
        upTitle: {
          text: "Сказочное заморское яство",
          color: "#666666"
        },
        text: {
          color: "#666666"
        },
        color: "#FFFFFF"
      }
    },
    selected: {
      style: {
        color: "#000",
        borderColor: "#D91667",
        backgroundColor: "#F2F2F2",
        backgroundImage: `url(${bg})`,
        circle: {
          background: "#D91667"
        }
      },
      text: {
        appText: [
          ["Печень утки разварная с артишоками."],
          "Головы щучьи с чесноком да свежайшая сёмгушка.",
          "Филе из цыплят с трюфелями в бульоне."
        ],
        color: "#FFFFFF",
        upTitle: {
          text: "Сказочное заморское яство",
          color: "#666666"
        },
        text: {
          color: "#666666"
        }
      }
    },
    selectedHover: {
      style: {
        color: "#000",
        borderColor: "#E62E7A",
        backgroundColor: "#F2F2F2",
        backgroundImage: `url(${bg})`,
        circle: {
          background: "#E62E7A"
        }
      },
      text: {
        appText: [
          "Печень утки разварная с артишоками.",
          "Головы щучьи с чесноком да свежайшая сёмгушка.",
          "Филе из цыплят с трюфелями в бульоне."
        ],
        color: "#FFFFFF",
        upTitle: {
          text: "Котэ не одобряет?",
          color: "#E62E7A"
        },
        text: {
          color: "#666666"
        }
      }
    },
    disabled: {
      style: {
        color: "#D3D3D3",
        borderColor: "#B3B3B3",
        backgroundColor: "#F2F2F2",
        backgroundImage: `url(${bgDis})`,
        circle: {
          background: "#B3B3B3"
        },
        text: {
          color: "#D3D3D3"
        }
      },
      text: {
        appText: {
          first: "Печалька,",
          sec: "закончился."
        },
        upTitle: {
          text: "Сказочное заморское яство",
          color: "#D3D3D3"
        },
        text: {
          color: "#666666"
        },
        color: "#FFFF66"
      }
    }
  };
  const [states, setStates] = useState([
    {
      id: 1,
      state: 0,
      name: "с фуа-гра",
      weight: "0,5",
      subText: "10 порций мышь в подарок",
      text: [info.default.text.appText.text, info.default.text.appText.span],
      info: info.default
    },
    {
      id: 2,
      state: 0,
      name: "с рыбой",
      weight: "2",
      subText: "40 порций 2 мыши в подарок",
      text: [info.default.text.appText.text, info.default.text.appText.span],
      info: info.default
    },
    {
      id: 3,
      state: 0,
      name: "с курицей",
      weight: "5",
      subText: "100 порций 5 мышей в подарок заказчик доволен",
      text: [info.default.text.appText.text, info.default.text.appText.span],
      info: info.default
    }
  ]);

  const mouseEffect = ({ id }) => {
    setStates((prev) =>
      prev.map((data) => {
        if (data.id === Number(id) && data.state !== 2) {
          switch (data.state) {
            case 0:
              return { ...data, info: info.defaultHover };

            case 1:
              return { ...data, info: info.selectedHover };

            default:
              return data;
          }
        }

        return data;
      })
    );
  };

  const changeState = ({ id }) => {
    setStates((prev) =>
      prev.map((data) => {
        if (data.id === Number(id)) {
          switch (data.state) {
            case 0:
              return {
                ...data,
                state: 1,
                text: info.selected.text.appText[id - 1],
                info: info.selected
              };

            case 1:
              return {
                ...data,
                state: 2,
                text: [
                  info.disabled.text.appText.first,
                  info.disabled.text.appText.sec
                ],
                info: info.disabled
              };

            case 2:
              return {
                ...data,
                state: 0,
                text: [
                  info.default.text.appText.text,
                  info.default.text.appText.span
                ],
                info: info.default
              };

            default:
              return data;
          }
        }

        return data;
      })
    );
  };

  return (
    <div className="App">
      <h1 className="app__title" >Ты сегодня покормил кота?</h1>
      <div className="row">
        {states.map(data => (
          <div>
            <div className='card' style={data.info.style} id={data.id} onClick={e => changeState(e.target)} onMouseLeave={e => mouseEffect(e.target)}>
              <p className="card__uptitle" style={data.info.text.upTitle} id={data.id}>{data.info.text.upTitle.text}</p>
              <h2 className="card__title" id={data.id}>Нямушка<br /><span>{data.name}</span></h2>
              <p className="card__text" id={data.id} style={data.info.style.text}>{data.subText}</p>
              <div className="card__circle" style={data.info.style.circle} id={data.id}><p id={data.id}>{data.weight}<br /><span id={data.id}>кг</span></p></div>
            </div>
            <p className="app__text" style={data.info.text} id={data.id}>{data.text.constructor === Array ? (data.state === 0 ? data.text[0] : data.text.join(' ' + data.name + ' ')) : data.text} <span id={data.id} onClick={e => changeState(e.target)}>{data.text[1] === `купи.` ? data.text[1] : null}</span></p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App