import React, { useContext, useState, useCallback, useEffect } from "react";
import { CreateCheckoutSession } from "archetype-pricing"
import { useNavigate } from "react-router-dom";
const axios = require("axios");
const PlanComponent = () => {
    const PUBLICKEY = "archetype_pk_test_779b893db34848939e87ff74e4b75968"

    const [tiers, setTiers] = useState([]);

    async function CheckoutSessionUrl(tierId) {
        var result = null

        await CreateCheckoutSession(
            PUBLICKEY, 
            tierId, 
            "uLHmYF0Gp7ZANqOJtKrQ"
        ).then(function(response) {
            result = response
        })
        return result;
    };
    async function GetProducts(publicKey) {
      var result = null
      await axios // Making a GET request using axios and requesting information from the API
      .get(
        "https://test.archetype.dev/public/v1/api/" + publicKey + "/tiers"
      )
      .then((response) => { // If the GET request is successful, this block is executed
        if (response.status === 200){
          result = response.data
          return response.data; // The response of the API call is passed on to the next block
        }
        console.log("Error parsing request")
        return []
      })
      .catch((err) => {
        console.log(err); // Error handler
      });
    
      return result; // The contest data is returned
    }

    async function LoadProducts() {
        var result = []
        await GetProducts(PUBLICKEY).then(async function(response) {
          for (var i = 0; i < response.length; i++) { 
              var tier_id = response[i]["tier_id"]
              await CheckoutSessionUrl(tier_id).then(function(tier_response) {
                  response[i]["url"] = tier_response;
                  console.log(response[i])
              })
          }
          return response;
        }).then(function(response){
            result = response;
            setTiers(result)
            return result;
        });
        
        return result;

    }

    useEffect(() => {
      LoadProducts()
    }, []);


  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:flex-col sm:align-center">
          <h1 className="text-5xl font-extrabold text-gray-900 sm:text-center">Pricing Plans</h1>
          <p className="mt-5 text-xl text-gray-500 sm:text-center">
            Start building for free, then add a site plan to go live. Account plans unlock additional features.
          </p>

        </div>
        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-4">
          {tiers.map((tier) => (
            <div key={tier.name} className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
              <div className="p-6">
                <h2 className="text-lg leading-6 font-medium text-gray-900">{tier.name}</h2>
                <p className="mt-4 text-sm text-gray-500">{tier.description}</p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900">${tier.price}</span>{' '}
                  <span className="text-base font-medium text-gray-500">/mo</span>
                </p>
                <a
                    href={tier.url}
                    className="mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900"
                    >
                    Buy {tier.name}
                </a>
              </div>
              <div className="pt-6 pb-8 px-6">
                {tier.has_quota && 
                <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase">{tier.quota} API calls</h3>
                }
                <ul role="list" className="mt-6 space-y-4">
                  
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default PlanComponent;