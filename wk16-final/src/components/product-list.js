import React from "react";


export default class ProductList extends React.Component {
  render(){
    return (
      <div>
        <div className="container bg-light">
      <table className="table table-sm" >
        <thead className="">
          <tr>
            <th scope="col">Product</th>
            <th scope="col">Flavor/Type</th>
            <th scope="col">Benefit</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Q Daily Detox Tea</th>
            <td>Herbal Tea</td>
            <td>Fitness & WeightLoss</td>
            <td>$42.50</td>
          </tr>
          <tr>
            <th scope="row">Q Ultra Greens</th>
            <td>Apple Cinnamom</td>
            <td>Whole Body Health</td>
            <td>$62.50</td>
          </tr>
          <tr>
            <th scope="row">Q Armor</th>
            <td>Chai Spice</td>
            <td>Immune Support</td>
            <td>$45.00</td>
          </tr>
          <tr>
            <th scope="row">Q Core</th>
            <td>MultiVitamins</td>
            <td>Whole Body Health</td>
            <td>$150.00</td>
          </tr>
          <tr>
            <th scope="row">Q Twist Crave</th>
            <td>Berry Smoothie</td>
            <td>Curbs Appetite/Stress Relief</td>
            <td>$62.50</td>
          </tr>
          <tr>
            <th scope="row">Q Twist Hydrate</th>
            <td>Juicy Grape</td>
            <td>Hydration/Stress Relief</td>
            <td>$62.50</td>
          </tr>
          <tr>
            <th scope="row">Q Twist Calm</th>
            <td>NON HEMP Peach Lemonade</td>
            <td>Stress/Anxiety Relief</td>
            <td>$62.50</td>
          </tr>
          <tr>
            <th scope="row">Q Twist Calm</th>
            <td>Peach Lemonade-THC</td>
            <td>Anxiety/Stress Relief</td>
            <td>$62.50</td>
          </tr>
          <tr>
            <th scope="row">Q Twist Variety</th>
            <td>Berry Smoothie, NON HEMP Peach Lemonade, Juicy Grape</td>
            <td>Curbs Appetite/Stress Relief/Hydration</td>
            <td>$62.50</td>
          </tr>
          <tr>
            <th scope="row">Q Rev</th>
            <td>Strawberry</td>
            <td>Pre-Workout</td>
            <td>$55</td>
          </tr>
        </tbody>
      </table>
    </div>

      </div>
    )
  }
    
}
