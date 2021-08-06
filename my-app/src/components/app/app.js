import React, {Component} from 'react';
import Header from '../header/header';
import ItemList from '../item-list/item-list';
import PersonDetail from '../person-details/person-details';

export default class App extends Component {
    render() {
        return (
            <div>
               <Header /> 
               <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList />
                    </div>
                    <div className="col-md-6">
                        <PersonDetail />
                    </div>
               </div>
            </div>
        );
    }
}