const contactModal = document.getElementById("contact-modal");
const addContactBtn = document.getElementById("add-contact-btn");
const closeContactModalBtn = document.getElementById("close-modal");
const contactForm = document.getElementById("contact-form");
const contactList = document.getElementById("contact-list");

let contacts = [];

addContactBtn.addEventListener("click", () => {
    contactModal.style.display = "block";
});

closeContactModalBtn.addEventListener("click", () => {
    contactModal.style.display = "none";
});

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const prenom = document.getElementById("prenom").value;
    const nom = document.getElementById("nom").value;
    const email = document.getElementById("email").value;
    const numero = document.getElementById("numero").value;

    const newContact = {
        prenom,
        nom,
        email,
        numero
    };

    contacts.push(newContact);

    contactForm.reset();
    contactModal.style.display = "none";

    displayContacts();
});

function displayContacts() {
    contactList.innerHTML = "";

    contacts.forEach((contact, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${contact.prenom} ${contact.nom}</span>
            <span>${contact.email}</span>
            <span>${contact.numero}</span>
            <button onclick="editContact(${index})">Modifier</button>
            <button onclick="deleteContact(${index})">Supprimer</button>
        `;
        contactList.appendChild(li);
    });
}

function editContact(index) {
    const contact = contacts[index];

    document.getElementById("prenom").value = contact.prenom;
    document.getElementById("nom").value = contact.nom;
    document.getElementById("email").value = contact.email;
    document.getElementById("numero").value = contact.numero;

    contactModal.style.display = "block";
}

function deleteContact(index) {
    const confirmation = confirm("Voulez-vous vraiment supprimer ce contact ?");

    if (confirmation) {
        contacts.splice(index, 1);
        displayContacts();
    }
}

displayContacts();
