import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

const defaulValue = {
    Value: 0, HighLight: false
}

const reducer = (state = defaulValue, action) => {
    if (action.tyle === 'UP') return { Value: defaulValue.Value + 1, HighLight: !defaulValue.HighLight }
    if (action.tyle === 'DOWN') return { Value: defaulValue.Value - 1, HighLight: defaulValue.HighLight }
    if (action.tyle === 'CHANGE_COLOR') return { Value: defaulValue.Value, HighLight: !defaulValue.HighLight }
    return state;
}

const store = createStore(reducer)
