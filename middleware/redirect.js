export default function ({ route, redirect }) {
    if (route.path === '/dashboard') {
      return redirect('/dashboard/market')
    }
  }
  