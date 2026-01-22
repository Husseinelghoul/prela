from django.shortcuts import render, redirect

def indexMain(request):
    context= {
            'title': 'Prela Automobile AG',
    }
    return render(request, 'index.html', context)

def About(request):
    context= {
            'title': 'About Prela Automobile AG',
    }
    return render(request, 'about.html', context)

def selling_tips(request):
    context= {
            'title': 'Tips for Selling a Car',
    }
    return render(request, 'tips/selling.html', context)

def buying_tips(request):
    context= {
            'title': 'Tips for Buying a Car',
    }
    return render(request, 'tips/buying.html', context)

def exporting_tips(request):
    context= {
            'title': 'Tips for Exporting a Car',
    }
    return render(request, 'tips/exporting.html', context)

def contact(request):
    context= {
            'title': 'Contact Prela Automobile AG',
    }
    return render(request, 'contact.html', context)

def quote(request):
    if request.method == 'POST':
        # Here we would normally process the form data (save to DB, send email, etc.)
        return redirect('thank-you')
    
    context= {
            'title': 'Get a Free Quote',
    }
    return render(request, 'quote.html', context)

def thank_you(request):
    context= {
            'title': 'Thank You',
    }
    return render(request, 'thank-you.html', context)

def privacy_policy(request):
    context= {
            'title': 'Privacy Policy',
    }
    return render(request, 'legal/privacy-policy.html', context)

def cookie_policy(request):
    context= {
            'title': 'Cookie Policy',
    }
    return render(request, 'legal/cookie-policy.html', context)

def terms(request):
    context= {
            'title': 'Terms & Conditions',
    }
    return render(request, 'legal/terms.html', context)
