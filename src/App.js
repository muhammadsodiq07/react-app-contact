import React, { PureComponent } from 'react'
import "./App.scss"
import Contact from './components/Contact/Contact'
import OutputContact from './components/OutputContact/OutputContact'

class App extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      listObj: 
        {
          name: undefined,
          number: undefined,
          category: undefined,
        },
      listArr: [
        {
          name: 'Muhammadsodiq',
          number: 999812822,
          category: 'Family'
        },
        {
          name: 'Azizbek',
          number: 999812822,
          category: 'Friends'
        }
      ],
    }
  }

  typeHandler = (e) => {
    let obj = {}

    if(e.target.type === "text") {
      obj.name = e.target.value
    }
    if(e.target.type === "number") {
      obj.number = e.target.value
    }

    this.setState({listObj: {...this.state.listObj, ...obj}})
  }

  selectFun = (e) => {
    let obj = {
      category:e.target.value,
    }
    this.setState({listObj: {...this.state.listObj, ...obj}})

  }
  addContacForm = (e) => {
    e.preventDefault();
    this.setState({listArr: [...this.state.listArr,{...this.state.listObj}]})
    e.target.reset()
  }
  render() {
    return (
        <div className ="maunaa">
            <div className="maun">
            <Contact 
            addContacForm={this.addContacForm}
            typeHandler={this.typeHandler}
            selectFun={this.selectFun}
            />
            </div>
            <div className="sss">
              {this.state.listArr.map((item, i) => {
                return (
                  <OutputContact key={i} name={item.name}
                  number={item.number}
                  category={item.category}
                  />
                )
              })}
            </div>
        </div>
    )
  }
}

export default App
