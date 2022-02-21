import { Switch } from '@headlessui/react'
import Navbar from './CustomNavbar'
import React, { useContext, useState, useEffect, useCallback } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function TypeformSurvey() {
  const [agreed, setAgreed] = useState(false)

  const [authEmail, setAuthEmail] = useState("")
  const [authPassword, setAuthPassword] = useState("")
  const [showAlert] = useState(false)

  const [inProgress, setProgress] = useState(false);
  const [agreedTerms, setAgreedTerms] = useState(false);
  const [fullName, setFullname] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(authPassword);

  const submitForm = useCallback(async () => {
    try {
      if (inProgress) {
        return;
      }
      if (!authEmail) {
        return showAlert("Invalid email address");
      }
      if (!fullName) {
        return showAlert("User name is required");
      }
      if (!authPassword) {
        return showAlert("Empty password");
      }
      if (!confirmPassword) {
        return showAlert("Empty confirmation password");
      }
      if (authPassword !== confirmPassword) {
        return showAlert("Passwords are not equal");
      }
      if (!agreedTerms) {
        return showAlert("Did you read our Terms and Privacy Policy?");
      }

      setProgress(true);

      await AccountService.signUp(authEmail, authPassword, fullName);

      showAlert(
        "We have sent a confirmation email to verify your account",
        true
      );

      setAuthEmail("");
      setAuthPassword("");

      router.push("/account/signup/next");
    } catch (e) {
      showAlert(e.message);
    } finally {
      setProgress(false);
    }
  }, [
    authEmail,
    setAuthEmail,
    authPassword,
    setAuthPassword,
    showAlert,
    inProgress,
    agreedTerms,
    fullName,
    confirmPassword,
  ]);

  return (
    <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
        <Navbar/>
      <div className="relative max-w-xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Get Beta Access</h2>
          <p className="mt-4 text-lg leading-6 text-gray-500">
          </p>
        </div>
        <div className="mt-12">
          <form action="#" method="POST" className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
            <div>
              <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                First name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div>
              <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                Last name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                Company
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="company"
                  id="company"
                  autoComplete="organization"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                />
              </div>
            </div>
            <fieldset className="sm:col-span-2">
                <legend className="block text-sm font-medium text-gray-700">Expected budget</legend>
                <div className="mt-4 grid grid-cols-1 gap-y-4">
                  <div className="flex items-center">
                    <input
                      id="budget-under-25k"
                      name="budget"
                      defaultValue="under_25k"
                      type="radio"
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                    />
                    <label htmlFor="budget-under-25k" className="ml-3">
                      <span className="block text-sm text-gray-700">Less than $25K</span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="budget-25k-50k"
                      name="budget"
                      defaultValue="25k-50k"
                      type="radio"
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                    />
                    <label htmlFor="budget-25k-50k" className="ml-3">
                      <span className="block text-sm text-gray-700">$25K – $50K</span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="budget-50k-100k"
                      name="budget"
                      defaultValue="50k-100k"
                      type="radio"
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                    />
                    <label htmlFor="budget-50k-100k" className="ml-3">
                      <span className="block text-sm text-gray-700">$50K – $100K</span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="budget-over-100k"
                      name="budget"
                      defaultValue="over_100k"
                      type="radio"
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                    />
                    <label htmlFor="budget-over-100k" className="ml-3">
                      <span className="block text-sm text-gray-700">$100K+</span>
                    </label>
                  </div>
                </div>
              </fieldset>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <div className="mt-1">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
                  defaultValue={''}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Switch
                    checked={agreed}
                    onChange={setAgreed}
                    className={classNames(
                      agreed ? 'bg-indigo-600' : 'bg-gray-200',
                      'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                    )}
                  >
                    <span className="sr-only">Agree to policies</span>
                    <span
                      aria-hidden="true"
                      className={classNames(
                        agreed ? 'translate-x-5' : 'translate-x-0',
                        'inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                      )}
                    />
                  </Switch>
                </div>
                <div className="ml-3">
                  <p className="text-base text-gray-500">
                    By selecting this, you agree to the{' '}
                    <a href="#" className="font-medium text-gray-700 underline">
                      Privacy Policy
                    </a>{' '}
                    and{' '}
                    <a href="#" className="font-medium text-gray-700 underline">
                      Cookie Policy
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Let's talk
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="form-block">
            <div className="top-info">
              <h2>Create your account</h2>
              <p>Sign up to continue.</p>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                submitForm();
              }}
            >
              <div className="field">
                <label htmlFor="userEmail">Email</label>
                <input
                  type="email"
                  autoComplete="email"
                  value={authEmail}
                  id="userEmail"
                  onChange={(e) => setAuthEmail(e.target.value)}
                />
              </div>
              <div className="field">
                <label htmlFor="userName">Your name</label>
                <input
                  type="text"
                  value={fullName}
                  id="userName"
                  onChange={(e) => setFullname(e.target.value)}
                />
              </div>
              <div className="field">
                <label htmlFor="userPassword">Password</label>
                <input
                  type="password"
                  autoComplete="new-password"
                  value={authPassword}
                  id="userPassword"
                  onChange={(e) => setAuthPassword(e.target.value)}
                />
              </div>
              <div className="field">
                <label htmlFor="confirmUserPassword">Confirm Password</label>
                <input
                  type="password"
                  autoComplete="new-password"
                  value={confirmPassword}
                  id="confirmUserPassword"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <div className="box">
                <input
                  type="checkbox"
                  checked={agreedTerms}
                  onChange={(e) => setAgreedTerms(e.target.checked)}
                />
              </div>
              <button type="submit" className="btn gradient-blue">
                Sign Up
              </button>
            </form>
    
          </div>
    </div>
  )
}
