function Footer() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
            <div className="space-y-4 text-xs text-gray-800">
                <h5 className="font-bold cursor-pointer">About</h5>
                <p className="cursor-pointer">How AirBnB works</p>
                <p className="cursor-pointer">NewsRoom</p>
                <p className="cursor-pointer">Investors</p>
                <p className="cursor-pointer">AirBnB Plus</p>
                <p className="cursor-pointer">AirBnB Luxe</p>
            </div>
            <div className="space-y-4 text-xs text-gray-800">
                <h5 className="font-bold cursor-pointer">This site</h5>
                <p className="cursor-pointer">Next.js & Tailwind CSS</p>
                <p className="cursor-pointer">But it's not a real site</p>
                <p className="cursor-pointer">It is just an awesome clone</p>
                <p className="cursor-pointer">Referrals accepted</p>
                <p className="cursor-pointer">Hire me</p>
            </div>
            <div className="space-y-4 text-xs text-gray-800">
                <h5 className="font-bold cursor-pointer">Host</h5>
                <p className="cursor-pointer">I am available</p>
                <p className="cursor-pointer">For Full time employment</p>
                <p className="cursor-pointer">React is my favorite</p>
                <p className="cursor-pointer">But I am down with Python</p>
                <p className="cursor-pointer">Even Ruby on Rails</p>
            </div>
            <div className="space-y-4 text-xs text-gray-800">
                <h5 className="font-bold cursor-pointer">Support</h5>
                <p className="cursor-pointer">Hit me with an email</p>
                <p className="cursor-pointer">SaucerSam@gmail.com</p>
                <p className="cursor-pointer">Or shoot me a text</p>
                <p className="cursor-pointer">214-991-0669</p>
                <p className="cursor-pointer">For your Web Dev needs</p>
            </div>
        </div>
    )
}

export default Footer
