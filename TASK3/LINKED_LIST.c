#include <stdio.h>
#include <stdlib.h>


struct Node {
    int data;
    struct Node* next;
};

// Function to insert a node at the beginning of the linked list
struct Node* insertAtBeginning(int new_data, struct Node* head) {
   
    struct Node* new_node = (struct Node*)malloc(sizeof(struct Node));
   
    new_node->data = new_data;
   
    new_node->next = head;
    
    return new_node;
}

// Function to insert a node at the end of the linked list
struct Node* insertAtEnd(int new_data, struct Node* head) {
    
    struct Node* new_node = (struct Node*)malloc(sizeof(struct Node));
    struct Node* last = head;

    new_node->data = new_data;
    
    new_node->next = NULL;

    if (head == NULL) {
        return new_node;
    }

    while (last->next != NULL)
        last = last->next;


    last->next = new_node;
    return head;
}

// Function to insert a node at a specified position in the linked list
struct Node* insertAtPosition(int new_data, int position, struct Node* head) {
    
    if (position < 1) {
        printf("Invalid position!\n");
        return head;
    }

   
    if (position == 1) {
        return insertAtBeginning(new_data, head);
    }

    
    struct Node* new_node = (struct Node*)malloc(sizeof(struct Node));
    struct Node* temp = head;

  
    new_node->data = new_data;

    
    for (int i = 1; i < position - 1 && temp != NULL; i++)
        temp = temp->next;

    
    if (temp == NULL) {
        printf("Position is greater than the number of nodes. Inserting at the end.\n");
        return insertAtEnd(new_data, head);
    }

    new_node->next = temp->next;
    temp->next = new_node;
    return head;
}

// Function to delete the first node in the linked list
struct Node* deleteAtBeginning(struct Node* head) {
    
    if (head == NULL) {
        printf("List is empty. Nothing to delete.\n");
        return head;
    }

    struct Node* temp = head;
    
    head = temp->next;
  
    free(temp);
    return head;
}

// Function to delete the last node in the linked list
struct Node* deleteAtEnd(struct Node* head) {
   
    if (head == NULL) {
        printf("List is empty. Nothing to delete.\n");
        return head;
    }

    if (head->next == NULL) {
        free(head);
        return NULL;
    }

    struct Node* second_last = head;
    while (second_last->next->next != NULL)
        second_last = second_last->next;

    free(second_last->next);
   
    second_last->next = NULL;
    return head;
}

// Function to delete a node at a specified position in the linked list
struct Node* deleteAtPosition(int position, struct Node* head) {
   
    if (position < 1 || head == NULL) {
        printf("Invalid position or list is empty!\n");
        return head;
    }

    if (position == 1) {
        struct Node* temp = head;
        head = temp->next; 
        free(temp);        
        return head;
    }

    struct Node* temp = head;
    struct Node* prev = NULL;

    for (int i = 1; temp != NULL && i < position; i++) {
        prev = temp;
        temp = temp->next;
    }

    if (temp == NULL) {
        printf("Position is greater than the number of nodes. Nothing to delete.\n");
        return head;
    }

    if (temp->next != NULL) {
        prev->next = temp->next;
    } else { 
        prev->next = NULL;
    }

    free(temp);
    return head;
}

// Function to display the linked list
void display(struct Node* head) {
    
    struct Node* temp = head;
  
    while (temp != NULL) {
        printf("%d ", temp->data);
        temp = temp->next;
    }
    printf("\n");
}

int main() {
    
    struct Node* head = NULL;

    // Insert some nodes
    head = insertAtBeginning(1, head);
    head = insertAtEnd(3, head);
    head = insertAtEnd(4, head);
    head = insertAtEnd(5, head);
    head = insertAtEnd(6, head);
    head = insertAtPosition(2, 2, head);

    // Display the linked list
    printf("Linked list: ");
    display(head);

    // Delete nodes
    head = deleteAtBeginning(head);
    head = deleteAtEnd(head);
    head = deleteAtPosition(1, head);

    // Display the linked list after deletion
    printf("Linked list after deletion: ");
    display(head);

    return 0;
}

