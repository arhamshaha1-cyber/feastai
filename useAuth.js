import { useState, useEffect } from 'react'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from 'firebase/auth'
import { auth, configured } from './firebase.js'

function toFriendly(code) {
  var map = {
    'auth/user-not-found':       'No account found with that email.',
    'auth/wrong-password':       'Incorrect password.',
    'auth/email-already-in-use': 'An account with that email already exists.',
    'auth/weak-password':        'Password must be at least 6 characters.',
    'auth/invalid-email':        'Please enter a valid email address.',
    'auth/too-many-requests':    'Too many attempts. Please wait a moment.',
    'auth/invalid-credential':   'Email or password is incorrect.',
  }
  return map[code] || 'Something went wrong. Please try again.'
}

export function useAuth() {
  var [user, setUser]       = useState(null)
  var [loading, setLoading] = useState(true)
  var [error, setError]     = useState('')

  useEffect(function() {
    if (!configured) {
      setLoading(false)
      return
    }
    var unsub = onAuthStateChanged(auth, function(fu) {
      if (fu) {
        setUser({ uid: fu.uid, email: fu.email, name: fu.displayName || fu.email.split('@')[0] })
      } else {
        setUser(null)
      }
      setLoading(false)
    })
    return unsub
  }, [])

  async function signup(name, email, password) {
    setError('')
    if (!configured) {
      setUser({ uid: 'demo', name: name || 'Demo User', email: email })
      return true
    }
    try {
      var cred = await createUserWithEmailAndPassword(auth, email, password)
      await updateProfile(cred.user, { displayName: name })
      return true
    } catch (err) {
      setError(toFriendly(err.code))
      return false
    }
  }

  async function login(email, password) {
    setError('')
    if (!configured) {
      setUser({ uid: 'demo', name: email.split('@')[0], email: email })
      return true
    }
    try {
      await signInWithEmailAndPassword(auth, email, password)
      return true
    } catch (err) {
      setError(toFriendly(err.code))
      return false
    }
  }

  async function logout() {
    if (configured) await signOut(auth)
    setUser(null)
  }

  return { user, loading, error, setError, signup, login, logout }
}
