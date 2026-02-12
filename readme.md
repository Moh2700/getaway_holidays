# Getaway Holidays overview

This website specializes in booking historical tours and educational lectures focused on Al-Andalus and the Moorish legacy in Iberia. It offers expertly guided experiences that explore the region’s history, culture, architecture, and intellectual heritage.

The platform allows users to easily discover and book tours and talks led by knowledgeable historians and cultural experts, making the history of Andalusia engaging, accessible, and meaningful for a global audience.

Visitors can easily discover, explore, and book guided tours of historic cities, monuments, and archaeological sites, as well as attend in-depth lectures led by historians, researchers, and cultural experts. Each experience is designed to provide historical accuracy, thoughtful storytelling, and meaningful context, connecting past civilizations with the present.

# Getaway Holidays User Story

### As a Visitor / History Enthusiast

As a Visitor/ History Enthusiast using the system I want to be able to browse historical tours and lectures about Al-Andalus so I can choose experiences that match my interests.

I want to see detailed descriptions, dates, locations, and historical context so I understand what each experience offers.

I want to book tours or lectures online easily so I can secure my spot without hassle.

### As a Tourist

As a tourist, I want to filter tours by city, date, or theme so I can plan my trip efficiently.

As a tourist, I want to see tour duration and language options so I can choose what fits my schedule.

### As a Student / Researcher

As a learner, I want access to lectures and historical resources so I can deepen my understanding of Moorish history.

As a learner, I want to attend online or in-person lectures so I can learn regardless of my location.

### As a Tour Guide / Lecturer

As a guide, I want to create and manage my tours or lectures so I can present my expertise.

As a guide, I want to see bookings and attendee numbers so I can prepare properly.

### As an Admin

As an admin, I want to manage tours, lectures, users, and bookings so the platform runs smoothly.

As an admin, I want to update content and schedules so information stays accurate and current.

# Getaway Holidays Features

- **Navigation Bar**
  - the full responsive navigation bar includes links to the Logo, Home page, Tours, Registration, Lectures and Login page for easy navigation through the existing system
  - This section will allow the user to easily navigate from section to section across all devices in my program.

![Navigation Bar](./docs/features/navigmenu.png)

- **The Home page image**
  - This includes an image about the magnificent and still holding at this time the Alahambra Castle wordly known as the jewel of a wonderful era of cohexistence between three cultures Islamic and Judeo Christian during the reign of Muslims in Al Andalus.
  - This section introduces the user to the history of an eye cathing of the wonders of Andalusian heritage of Muslim Spain.

![Landing Page](./docs/features/mainbackgrnd.png)

- **The Login Hyperlink**
- When making a selection for this option the user is prompted with a logging screen to enter the credentials to use the system.
- This screen is only for admin to view and manage the system. The normal registered user has no access to this option.
  This option allow the user to delete [Registered Users], [Booked Tour Users], [Booked Lectures Users] and hopefully update users details if times has got no constraints.

![Landing Page](./docs/features/loginscreen.png)

- **The Tours Hyperlink**
- The user can browse the varierty of tours offered.

![Landing Page](./docs/features/tours.png)

- **The Lectures Hyperlink**
  ![Landing Page](./docs/features/lectures.png)

- **The Registration Menu**
  - New Registration Hyperlink

  ![Landing Page](./docs/features/registration.png)
  - Show Users Hyperlink

  ![Landing Page](./docs/features/registeredusers.png)
  - Show Users Details

  ![Landing Page](./docs/features/regusrdetails.png)

- **The Reservation Menu**
  - Reserved Tours Hyperlink

  ![Landing Page](./docs/features/toursusr.png)

  ![Landing Page](./docs/features/tourusrdetails.png)
  - Reserved Lectures Hyperlink

  ![Landing Page](./docs/features/lecturesusr.png)

  ![Landing Page](./docs/features/lectureusrdetails.png)

# System Testing

The system has no restrictions when it comes to browsing for lectures and tours in which the user can have multitude information regarding the Al Andalus. But to be able to use the system for booking tours or lectures, the user needs to be registered through the website.
The screens below will highlight how the system works.

![Landing Page](./docs/features/testregistration1.png)

![Landing Page](./docs/features/testregistration2.png)

![Landing Page](./docs/features/testregisteredusers1.png)

- Booking Tours

![Landing Page](./docs/features/testtours1.png)

![Landing Page](./docs/features/testtours2.png)

![Landing Page](./docs/features/testtours3.png)

![Landing Page](./docs/features/testtours4.png)

- Booking Lectures

![Landing Page](./docs/features/testlecture1.png)

![Landing Page](./docs/features/testlecture2.png)

![Landing Page](./docs/features/testlecture3.png)

![Landing Page](./docs/features/testlecture4.png)

# Error Validation

- Registration form

![Landing Page](./docs/features/validreg.png)

![Landing Page](./docs/features/validreg2.png)

Here is in this screen the user must enter the credentials properly otherwise they won't be able to progress in the system. The second screen is checking for valid email address which allow him to enter and register for the system.

- Login Form
  ![Landing Page](./docs/features/validlogin.png)

Here the Admin needs to enter the right password and username to be able to login to the system to be able to see more functionalities in the system.

username = admin
password = admin

# Project Structure

# HTML page Validator

![Landing Page](./docs/features/mainpageindex.png)

# Javascript page Validator

# Features not implemented at this stage

I want to view guide and lecturer profiles so I can trust the expertise behind the content
I want to receive booking confirmations and reminders so I don’t miss my experience.

# Deployment

Step 1: Initialize a Git Repository in a Frontend Project
Navigate to your frontend project folder in the terminal and initialize a local Git Repository

git init

This command will create a .git folder where the details of the repository like remote and username and email are stored.

Step 2: Configure Git username and password
Set your identity for locally for this specific project.

git config user.name "Your Name"
git config user.email "your.email@example.com"
To configure globally for your future repositories:

git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
This step ensures that every commit is linked to your identity.

Step 3: Create a New Repository on Github

![alt text](https://media.geeksforgeeks.org/wp-content/uploads/20250716161225305378/newrepo.PNG)

https://media.geeksforgeeks.org/wp-content/uploads/20250716160149338206/HowtocreateaRepositoryongithub.PNG

Click the "+" icon on the top-right corner. Select "New repository".
newrepo
create repository

Fill in the repository name (e.g., MyProject), add an optional description, choose Public or Private, and click Create repository.

HowtocreateaRepositoryongithub
New Repository

Note: Once created, GitHub shows you a few lines of code — copy the one with https://github.com/dummyname/MyProject

Step 4: Now Add, Commit and push your Frontend Code

In your terminal(inside your project folder)

git add .
git commit -m " added frontend file"
git remote add origin https://github.com/your-username/your-repo-name
git branch -M master
git push -u origin main
This will push your HTML, CSS, and JavaScript files to the GitHub repository.

- Now that your project has been initialized with Git and pushed to GitHub, let’s host it on GitHub Pages. GitHub Pages is a free service that allows you to publish web projects directly from a GitHub repository.

- GitHub Pages
  GitHub Pages turns your GitHub repository into a website. It's an easy way to showcase your projects without needing a separate hosting service. You can create static websites directly from your repositories.

- Go to your GitHub repository in a web browser.

- Click on the "Settings" tab.

- Scroll down to the "Pages" section in the left-hand menu.

- Under "Source," select the branch you want to publish from (typically main or master), and choose the root folder.

![Landing Page](./deployment/deploystep1.png)

![Landing Page](./deployment/deploystep2.png)

![Landing Page](./deployment/deploystep3.png)

- Selecting the branch and root folder for GitHub Pages.

- Click "Save button"

- How to Get Your GitHub Pages URL
  After enabling GitHub Pages, GitHub will provide you with a URL where your site is published. It usually follows this format:

https://<username>.github.io/<repository-name>

- How to Update Your GitHub Pages Site
  Every time you push changes to the selected branch in your repository, GitHub Pages will automatically update your live site. Here’s a quick reminder on how to push changes:

- Make changes to your project files.

- Add and commit your changes:

Any changes to the website done locally on vscode will be updated to the existing project on GITHUB pages

git add .
git commit -m "Your commit message"

- Push the changes to GitHub:

  git push origin main

# Bugs

# Project Limitations

# Media

- **Pexels and Unsplash website**

- The photos were taken from from This Open Source site
  [Pexels Site] ("https://www.pexels.com/search/gym/") and
  [Unsplash Site] ("https://unsplash.com/s/photos/gym")

- The photos used in the home, classes and aboutus page.
- The photos used on the home page .
- The images used for the gallery page.

# Project Challenges

# Project Technologies Used

# How to Install and Run the Project

# Credits

# Tests

## Validator Testing

**HTML Validation**

## Home page

**Evidence**

**Bootstrap**

- [Bootstrap files] ("https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css")
- [Bootstrap files] ("https://getbootstrap.com/docs/5.3/assets/css/docs.css")
- [Bootstrap files] ("https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js)
